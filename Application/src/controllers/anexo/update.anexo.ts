import { pool } from "../../imports";

export const updateAnexo = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const anexo = req.body;
        const id_anexo = req.params.id_anexo;

        client.query("UPDATE anexo SET nome_anexo = $1 , formato_anexo  = $2 , tamanho_anexo  = $3 , data_carregamento_anexo  = $4 , caminho_arquivo_anexo  = $5, id_tarefa_anexo = $6  WHERE id_anexo = $7", [anexo.nome_anexo, anexo.formato_anexo, anexo.tamanho_anexo, anexo.data_carregamento_anexo, anexo.caminho_arquivo_anexo, anexo.id_tarefa_anexo, id_anexo], (queryError, result) => {
            release();

            if (queryError) {
                return res.status(500).json({ error: 'Erro ao executar a consulta' });
            }

            res.json(result.rows);
            });
    });
}
