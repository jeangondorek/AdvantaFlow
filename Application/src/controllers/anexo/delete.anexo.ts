import { pool } from "../../imports";

export const deleteAnexo = async (req: any, res: any) => {
    pool.connect(async (error, client, release) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM anexo WHERE id_anexo = $1";
            const selectResult = await client.query(selectQuery, [req.params.id_anexo]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi excluído.');
            }

            const checkFKQuery = "SELECT 1 FROM outra_tabela WHERE id_anexo = $1";
            const checkFKResult = await client.query(checkFKQuery, [req.params.id_anexo]);

            if (checkFKResult.rows.length > 0) {
                await client.query('ROLLBACK');
                return res.json('Não é possível excluir o registro. Está associado a outra tabela.');
            }

            const deleteQuery = "DELETE FROM anexo WHERE id_anexo = $1";
            await client.query(deleteQuery, [req.params.id_anexo]);

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
