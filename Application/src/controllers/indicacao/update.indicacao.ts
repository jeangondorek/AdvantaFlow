import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateIndicacao } from "../../middleware/validatedata/validate.indicacao.middleware";
import { Indicacao } from "../../models/indicacao.model";

export const updateIndicacao = async (req: any, res: any) => {
  validateData(Indicacao)(req, res, async () => {
    const indicacao = req.body;
    const id_indicacao = req.params.id_indicacao;

    const validationErrors = validateIndicacao(indicacao);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const selectQuery = "SELECT * FROM indicacao WHERE id_indicacao = $1";
      const selectResult = await client.query(selectQuery, [id_indicacao]);

      if (selectResult.rows.length < 1) {
        return res.json('Registro não encontrado. Nada foi atualizado.');
      }

      const updateIndicacaoQuery = `
        UPDATE indicacao 
        SET descricao_indicacao = $1,
        detalhes_indicacao =$2,
        WHERE id_indicacao = $3
        RETURNING id_indicacao`;

      const result = await client.query(updateIndicacaoQuery, [
        indicacao.descricao_indicacao,
        id_indicacao
      ]);

      const updatedIdIndicacao = result.rows[0].id_indicacao;

      await client.query('COMMIT');

      res.json({ message: 'Indicacao atualizada corretamente', id_indicacao: updatedIdIndicacao });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
