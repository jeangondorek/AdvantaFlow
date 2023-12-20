import { pool } from "../../imports";

export const deleteComarca = async (req: any, res: any) => {
    try{
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM comarca WHERE id_comarca = $1";
            const selectResult = await client.query(selectQuery, [req.params.id_comarca]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi excluído.');
            }

            const checkFKQuery = "SELECT * FROM processo WHERE id_comarca_processo = $1";
            const checkFKResult = await client.query(checkFKQuery, [req.params.id_comarca]);

            if (checkFKResult.rows.length > 0) {
                await client.query('ROLLBACK');
                return res.json('Não é possível excluir o registro. Está associado a outra tabela.');
            }

            const deleteQuery = "DELETE FROM comarca WHERE id_comarca = $1";
            await client.query(deleteQuery, [req.params.id_comarca]);

            await client.query('COMMIT');
            res.json('Excluído com sucesso.');

        } catch (queryError) {
            await client.query('ROLLBACK');
            res.status(500).json({ error: 'Erro ao executar a consulta' });
        } finally {
            client.release();
        }
    }catch(erro){
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
    }
};
