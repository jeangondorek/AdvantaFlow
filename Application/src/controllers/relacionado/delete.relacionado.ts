import { pool } from "../../imports";

export const deleteRelacionado = async (req: any, res: any) => {
    pool.connect(async (error, client, release) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM relacionado WHERE id_relacionado = $1";
            const selectResult = await client.query(selectQuery, [req.params.id_relacionado]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi excluído.');
            }

            const deleteQuery = "DELETE FROM relacionado WHERE id_relacionado = $1";
            await client.query(deleteQuery, [req.params.id_relacionado]);

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
