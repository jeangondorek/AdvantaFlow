import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateComarca } from "../../middleware/validatedata/validate.comarca.middleware";
import { Comarca } from "../../models/comarca.model";

export const updateComarca = async (req: any, res: any) => {
  validateData(Comarca)(req, res, async () => {
    const comarca = req.body;
    const id_comarca = req.params.id_comarca;

    const validationErrors = validateComarca(comarca);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const selectQuery = "SELECT * FROM comarca WHERE id_comarca = $1";
      const selectResult = await client.query(selectQuery, [id_comarca]);

      if (selectResult.rows.length < 1) {
        return res.json('Registro não encontrado. Nada foi atualizado.');
      }

      const updateComarcaQuery = `
        UPDATE comarca 
        SET descricao_comarca = $1
        WHERE id_comarca = $2
        RETURNING id_comarca`;

      const result = await client.query(updateComarcaQuery, [
        comarca.descricao_comarca,
        id_comarca
      ]);

      const updatedIdComarca = result.rows[0].id_comarca;

      await client.query('COMMIT');

      res.json({ message: 'Comarca atualizada corretamente', id_comarca: updatedIdComarca });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
