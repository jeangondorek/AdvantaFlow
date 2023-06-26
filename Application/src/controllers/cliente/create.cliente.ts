import { pool } from "../../imports";

export const createCliente = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const cliente = req.body;

        client.query("INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)", [cliente.nome_cliente, cliente.email_cliente , cliente.cpf_cnpj_cliente , cliente.rg_cliente , cliente.sexo_cliente , cliente.profissao_cliente , cliente.cep_cliente , cliente.uf_cliente , cliente.bairro_cliente , cliente.endereco_cliente , cliente.codigo_municipio_cliente , cliente.nacionalidade , cliente.data_nascimento_cliente, cliente.telefone_cliente , cliente.celular_cliente , cliente.id_indicacao_cliente], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}