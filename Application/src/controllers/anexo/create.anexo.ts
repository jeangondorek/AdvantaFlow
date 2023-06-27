import { pool } from "../../imports";

export const createAnexo = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const anexo = req.body;

        client.query("INSERT INTO anexo (id_tarefa_anexo , nome_anexo, formato_anexo, tamanho_anexo, data_carregamento_anexo, caminho_arquivo_anexo) VALUES ($1, $2, $3, $4, $5, $6)", [anexo.id_tarefa_anexo, anexo.nome_anexo, anexo.formato_anexo, anexo.tamanho_anexo, anexo.data_carregamento_anexo, anexo.caminho_arquivo_anexo], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}