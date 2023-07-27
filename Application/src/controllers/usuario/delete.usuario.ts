import { pool } from "../../imports";

export const deleteUsuario = async (req: any, res: any) => {
    pool.connect(async (error, client, release) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM usuario WHERE cpf_usuario = $1";
            const selectResult = await client.query(selectQuery, [req.params.cpf_usuario]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi excluído.');
            }

            const checkFKQuery = "SELECT * FROM processo WHERE cpf_usuario_processo = $1";
            const checkFKResult = await client.query(checkFKQuery, [req.params.cpf_usuario]);

            if (checkFKResult.rows.length > 0) {
                await client.query('ROLLBACK');
                return res.json('Não é possível excluir o registro. Está associado a outra tabela.');
            }

            const deleteQuery = "DELETE FROM usuario WHERE cpf_usuario = $1";
            await client.query(deleteQuery, [req.params.cpf_usuario]);

            await client.query('COMMIT');
            res.json('Excluído com sucesso.');

        } catch (queryError) {
            await client.query('ROLLBACK');
            res.status(500).json({ error: 'Erro ao executar a consulta' });
        } finally {
            release();
        }
    });
};
