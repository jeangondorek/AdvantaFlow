import { pool } from "../../imports";

export const getbyidPerfil = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        client.query('SELECT * FROM perfil WHERE id_perfil = $1', [req.params.id_perfil], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}