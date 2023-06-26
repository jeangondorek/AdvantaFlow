import { pool } from "../../imports";

export const createIndicacao = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const indicacao = req.body;

        client.query("INSERT INTO indicacao (descricao_indicacao , detalhes_indicacao) VALUES($1, $2);", [indicacao.descricao_indicacao, indicacao.detalhes_indicacao], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}