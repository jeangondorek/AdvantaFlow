import { pool } from "../../imports";

export const updateAssunto = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const descricao_assunto = req.body.descricao_assunto;
        const id_assunto = req.params.id_assunto;
        
        client.query("UPDATE assunto SET descricao_assunto = $1 WHERE id_assunto = $2", [descricao_assunto, id_assunto], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}
