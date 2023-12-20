import { pool } from "../../imports";

export const deletePerfil = async (req: any, res: any) => {
    try{
        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM perfil WHERE id_perfil = $1";
            const selectResult = await client.query(selectQuery, [req.params.id_perfil]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi excluído.');
            }

            const checkFKQuery = "SELECT * FROM usuario WHERE id_perfil_usuario = $1";
            const checkFKResult = await client.query(checkFKQuery, [req.params.id_perfil]);

            if (checkFKResult.rows.length > 0) {
                await client.query('ROLLBACK');
                return res.json('Não é possível excluir o registro. Está associado a outra tabela.');
            }

            const deleteQuery = "DELETE FROM perfil WHERE id_perfil = $1";
            await client.query(deleteQuery, [req.params.id_perfil]);

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
