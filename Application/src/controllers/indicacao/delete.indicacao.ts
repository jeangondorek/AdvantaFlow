import { pool } from "../../imports";

export const deleteIndicacao = async (req: any, res: any) => {
    try{
        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM indicacao WHERE id_indicacao = $1";
            const selectResult = await client.query(selectQuery, [req.params.id_indicacao]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi excluído.');
            }

            const deleteQuery = "DELETE FROM indicacao WHERE id_indicacao = $1";
            await client.query(deleteQuery, [req.params.id_indicacao]);

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
