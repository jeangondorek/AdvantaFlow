import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateRelacionado } from "../../middleware/validatedata/validate.relacionado.middleware";
import { Relacionado } from "../../models/relacionado.model";

export const updateRelacionado = async (req: any, res: any) => {
  validateData(Relacionado)(req, res, async () => {
    const relacionadoData = req.body;
    const id_relacionado = req.params.id_relacionado;

    const validationErrors = validateRelacionado(relacionadoData);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const selectQuery = "SELECT * FROM relacionado WHERE id_relacionado = $1";
      const selectResult = await client.query(selectQuery, [id_relacionado]);

      if (selectResult.rows.length < 1) {
        return res.json('Registro não encontrado. Nada foi atualizado.');
      }

      const updateRelacionadoQuery = `
        UPDATE relacionado 
        SET id_tarefa_relacionado = $1,
          cpf_usuario_relacionado = $2
        WHERE id_relacionado = $3
        RETURNING id_relacionado`;

      const result = await client.query(updateRelacionadoQuery, [
        relacionadoData.id_tarefa_relacionado,
        relacionadoData.cpf_usuario_relacionado,
        id_relacionado
      ]);

      const updatedIdRelacionado = result.rows[0].id_relacionado;

      await client.query('COMMIT');

      res.json({ message: 'Relacionado atualizada corretamente', id_relacionado: updatedIdRelacionado });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
