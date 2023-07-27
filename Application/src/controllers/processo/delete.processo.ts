import { pool } from "../../imports";

export const deleteProcesso = async (req: any, res: any) => {
    pool.connect(async (error, client, release) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM processo WHERE id_processo = $1";
            const selectResult = await client.query(selectQuery, [req.params.id_processo]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi excluído.');
            }

            const deleteQuery = "DELETE FROM processo WHERE id_processo = $1";
            await client.query(deleteQuery, [req.params.id_processo]);

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
