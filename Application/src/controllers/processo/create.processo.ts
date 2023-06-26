import { pool } from "../../imports";

export const createProcesso = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const processo = req.body;

        client.query("INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [processo.numero_cnpj_processo, processo.descricao_processo , processo.titulo_processo , processo.resultado_processo , processo.data_criacao_processo , processo.id_comarca_processo , processo.id_assunto_processo , processo.id_fase_processo , processo.cpf_cnpj_cliente_processo , processo.cpf_usuario_processo], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}