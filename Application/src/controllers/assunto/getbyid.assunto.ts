import { pool } from "../../imports";

export const getbyidAssunto = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        client.query('SELECT * FROM assunto WHERE id_assunto = $1', [req.params.id_assunto], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}