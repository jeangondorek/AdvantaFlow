import { pool } from "../../imports";

export const updateFase = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const descricao_fase = req.body.descricao_fase;
        const id_fase = req.params.id_fase;
        
        client.query("UPDATE fase SET descricao_fase = $1 WHERE id_fase = $2", [descricao_fase, id_fase], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}
