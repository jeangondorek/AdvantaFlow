import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateCliente } from "../../middleware/validatedata/validate.cliente.middleware";
import { Cliente } from "../../models/cliente.model";

export const updateCliente = async (req: any, res: any) => {
  validateData(Cliente)(req, res, async () => {
    const cliente = req.body;
    const cpf_cnpj_cliente = req.params.cpf_cnpj_cliente;

    const validationErrors = validateCliente(cliente);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const selectQuery = "SELECT * FROM cliente WHERE cpf_cnpj_cliente = $1";
      const selectResult = await client.query(selectQuery, [cpf_cnpj_cliente]);

      if (selectResult.rows.length < 1) {
        return res.json('Registro não encontrado. Nada foi atualizado.');
      }

      const updateClienteQuery = `
        UPDATE cliente 
        SET nome_cliente = $1, email_cliente = $2, rg_cliente = $3, 
          sexo_cliente = $4, profissao_cliente = $5, cep_cliente = $6, 
          uf_cliente = $7, bairro_cliente = $8, endereco_cliente = $9, 
          codigo_municipio_cliente = $10, nacionalidade = $11, data_nascimento_cliente = $12, 
          telefone_cliente = $13, celular_cliente = $14, id_indicacao_cliente = $15
        WHERE cpf_cnpj_cliente = $16
        RETURNING cpf_cnpj_cliente`;

      const result = await client.query(updateClienteQuery, [
        cliente.nome_cliente,
        cliente.email_cliente,
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
        cpf_cnpj_cliente
      ]);

      const updatedCpfCnpjCliente = result.rows[0].cpf_cnpj_cliente;

      await client.query('COMMIT');

      res.json({ message: 'Cliente atualizado corretamente', cpf_cnpj_cliente: updatedCpfCnpjCliente });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
