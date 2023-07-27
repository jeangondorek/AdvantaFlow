import { pool } from "../../imports";

export const deleteCliente = async (req: any, res: any) => {
    pool.connect(async (error, client, release) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM cliente WHERE cpf_cnpj_cliente = $1";
            const selectResult = await client.query(selectQuery, [req.params.cpf_cnpj_cliente]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi excluído.');
            }

            const checkFKQuery = "SELECT * FROM processo WHERE cpf_cnpj_cliente_processo = $1";
            const checkFKResult = await client.query(checkFKQuery, [req.params.cpf_cnpj_cliente]);

            if (checkFKResult.rows.length > 0) {
                await client.query('ROLLBACK');
                return res.json('Não é possível excluir o registro. Está associado a outra tabela.');
            }

            const deleteQuery = "DELETE FROM cliente WHERE cpf_cnpj_cliente = $1";
            await client.query(deleteQuery, [req.params.cpf_cnpj_cliente]);

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
