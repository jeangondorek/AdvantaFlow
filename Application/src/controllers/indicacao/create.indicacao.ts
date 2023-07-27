import { pool } from "../../imports";
import { Indicacao } from "../../models/indicacao.model";
import { validateData } from "../../middleware/validate.middleware";
import { validateIndicacao } from "../../middleware/validatedata/validate.indicacao.middleware";

export const createIndicacao = async (req: any, res: any) => {
  validateData(Indicacao)(req, res, async () => {
    const indicacaoData = req.body;
    const indicacao = new Indicacao(indicacaoData);

    const validationErrors = validateIndicacao(indicacao);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      
      const insertIndicacaoQuery = `
        INSERT INTO indicacao (descricao_indicacao, detalhes_indicacao)
        VALUES ($1, $2)
        RETURNING id_indicacao`;

      const result = await client.query(insertIndicacaoQuery, [
        indicacao.descricao_indicacao,
      ]);

      const insertedIndicacaoId = result.rows[0].id_indicacao;

      await client.query('COMMIT');

      res.json({ message: 'Indicacao criada com sucesso', id_indicacao: insertedIndicacaoId });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
