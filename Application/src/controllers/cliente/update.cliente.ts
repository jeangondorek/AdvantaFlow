import { pool } from "../../imports";

export const updateCliente = async (req: any, res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const cliente = req.body;
        const cpf_cnpj_cliente = req.params.cpf_cnpj_cliente;

        client.query("UPDATE cliente SET nome_cliente = $1, email_cliente = $2, rg_cliente = $3, sexo_cliente = $4, profissao_cliente = $5, cep_cliente = $6, uf_cliente = $7, bairro_cliente = $8, endereco_cliente = $9, codigo_municipio_cliente = $10, nacionalidade = $11, data_nascimento_cliente = $12, telefone_cliente = $13, celular_cliente = $14, id_indicacao_cliente = $15 WHERE cpf_cnpj_cliente = $16", [cliente.nome_cliente, cliente.email_cliente, cliente.rg_cliente, cliente.sexo_cliente, cliente.profissao_cliente, cliente.cep_cliente, cliente.uf_cliente, cliente.bairro_cliente, cliente.endereco_cliente, cliente.codigo_municipio_cliente, cliente.nacionalidade, cliente.data_nascimento_cliente, cliente.telefone_cliente, cliente.celular_cliente, cliente.id_indicacao_cliente, cpf_cnpj_cliente], (queryError, result) => {
            release();

            if (queryError) {
                return res.status(500).json({ error: 'Erro ao executar a consulta' });
            }

            res.json(result.rows);
        });
    });
}
