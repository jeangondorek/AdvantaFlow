import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateProcesso } from "../../middleware/validatedata/validate.processo.middleware";
import { Processo } from "../../models/processo.model";

export const createProcesso = async (req: any, res: any) => {
  validateData(Processo)(req, res, async () => {
    const processoData = req.body;
    const processo = new Processo(processoData);

    const validationErrors = validateProcesso(processo);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const insertProcessoQuery = `
      INSERT INTO processo (
        numero_cnpj_processo,
        descricao_processo,
        titulo_processo,
        resultado_processo,
        data_criacao_processo,
        id_comarca_processo,
        id_assunto_processo,
        id_fase_processo,
        cpf_cnpj_cliente_processo,
        cpf_usuario_processo
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id_processo`;

      const result = await client.query(insertProcessoQuery, [
      processo.numero_cnpj_processo,
      processo.descricao_processo,
      processo.titulo_processo,
      processo.resultado_processo || null,
      processo.data_criacao_processo,
      processo.id_comarca_processo,
      processo.id_assunto_processo,
      processo.id_fase_processo,
      processo.cpf_cnpj_cliente_processo,
      processo.cpf_usuario_processo
      ]);

      const insertedProcessoId = result.rows[0].id_processo;

      await client.query('COMMIT');

      res.json({ message: 'Processo criado com sucesso', id_processo: insertedProcessoId });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
