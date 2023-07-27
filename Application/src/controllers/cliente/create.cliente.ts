import { pool } from "../../imports";
import { Cliente } from "../../models/cliente.model";
import { validateCliente } from "../../middleware/validatedata/validate.cliente.middleware";

export const createCliente = async (req: any, res: any) => {
  const clienteData = req.body;
  const cliente = new Cliente(clienteData);

  const validationErrors = validateCliente(cliente);

  if (validationErrors.length > 0) {
    res.status(400).json({ errors: validationErrors });
    return;
  }

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const insertClienteQuery = `
      INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, 
        sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, 
        endereco_cliente, codigo_municipio_cliente, nacionalidade, data_nascimento_cliente, 
        telefone_cliente, celular_cliente, id_indicacao_cliente)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      RETURNING cpf_cnpj_cliente`;

    const result = await client.query(insertClienteQuery, [
      cliente.nome_cliente,
      cliente.email_cliente,
      cliente.cpf_cnpj_cliente,
      cliente.rg_cliente || null,
      cliente.sexo_cliente || null,
      cliente.profissao_cliente || null,
      cliente.cep_cliente,
      cliente.uf_cliente,
      cliente.bairro_cliente,
      cliente.endereco_cliente,
      cliente.codigo_municipio_cliente,
      cliente.nacionalidade || null,
      cliente.data_nascimento_cliente || null,
      cliente.telefone_cliente || null,
      cliente.celular_cliente,
      cliente.id_indicacao_cliente || null,
    ]);

    const insertedCpfCnpjCliente = result.rows[0].cpf_cnpj_cliente;

    await client.query('COMMIT');

    res.json({ message: 'Inserido corretamente', cpf_cnpj_cliente: insertedCpfCnpjCliente });
  } catch (error) {
    await client.query('ROLLBACK');
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  } finally {
    client.release();
  }
};
