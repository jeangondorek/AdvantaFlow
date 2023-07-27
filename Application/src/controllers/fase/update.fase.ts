import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateFase } from "../../middleware/validatedata/validate.fase.middleware";
import { Fase } from "../../models/fase.model";

export const updateFase = async (req: any, res: any) => {
  validateData(Fase)(req, res, async () => {
    const fase = req.body;
    const id_fase = req.params.id_fase;

    const validationErrors = validateFase(fase);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const selectQuery = "SELECT * FROM fase WHERE id_fase = $1";
      const selectResult = await client.query(selectQuery, [id_fase]);

      if (selectResult.rows.length < 1) {
        return res.json('Registro não encontrado. Nada foi atualizado.');
      }
      
      const updateFaseQuery = `
        UPDATE fase 
        SET descricao_fase = $1,
        WHERE id_fase = $2
        RETURNING id_fase`;

      const result = await client.query(updateFaseQuery, [
        fase.descricao_fase,
        id_fase
      ]);

      const updatedIdFase = result.rows[0].id_fase;

      await client.query('COMMIT');

      res.json({ message: 'Fase atualizada corretamente', id_fase: updatedIdFase });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
