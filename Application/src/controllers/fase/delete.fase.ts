import { pool } from "../../imports";

export const deleteFase = async (req: any, res: any) => {
    pool.connect(async (error, client, release) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM fase WHERE id_fase = $1";
            const selectResult = await client.query(selectQuery, [req.params.id_fase]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi excluído.');
            }

            const checkFKQuery = "SELECT * FROM processo WHERE id_fase_processo = $1";
            const checkFKResult = await client.query(checkFKQuery, [req.params.id_fase]);

            if (checkFKResult.rows.length > 0) {
                await client.query('ROLLBACK');
                return res.json('Não é possível excluir o registro. Está associado a outra tabela.');
            }

            const deleteQuery = "DELETE FROM fase WHERE id_fase = $1";
            await client.query(deleteQuery, [req.params.id_fase]);

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
