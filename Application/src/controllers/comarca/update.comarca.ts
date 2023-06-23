import { pool } from "../../imports";

export const updateComarca = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const descricao_comarca = req.body.descricao_comarca;
        const id_comarca = req.params.id_comarca;
        
        client.query("UPDATE comarca SET descricao_comarca = $1 WHERE id_comarca = $2", [descricao_comarca, id_comarca], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}
