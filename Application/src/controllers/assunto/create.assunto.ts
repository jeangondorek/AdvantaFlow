import { pool } from "../../imports";

export const createAssunto = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const descricaoAssunto = req.body.descricao_assunto;

        client.query("INSERT INTO assunto (descricao_assunto) VALUES ($1)", [descricaoAssunto], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}