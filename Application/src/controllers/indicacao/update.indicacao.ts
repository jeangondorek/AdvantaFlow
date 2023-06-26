import { pool } from "../../imports";

export const updateIndicacao = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const indicacao = req.body;
        const id_indicacao = req.params.id_indicacao;
        
        client.query("UPDATE indicacao SET descricao_indicacao = $1 , detalhes_indicacao = $2  WHERE id_indicacao = $3", [indicacao.descricao_indicacao, indicacao.detalhes_indicacao,  id_indicacao], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });

    });
}
