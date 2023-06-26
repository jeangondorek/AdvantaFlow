import { pool } from "../../imports";

export const createAnexo = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const anexo = req.body;

        client.query("INSERT INTO anexo (nome, formato, tamanho, data_carregamento, caminho_arquivo) VALUES ($1)", [anexo.nome, anexo.formato, anexo.tamanho, anexo.data_carregamento, anexo.caminho_arquivo], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}