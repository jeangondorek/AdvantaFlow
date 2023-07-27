import { pool } from "../../imports";
import { Fase } from "../../models/fase.model";
import { validateData } from "../../middleware/validate.middleware";
import { validateFase } from "../../middleware/validatedata/validate.fase.middleware";

export const createFase = async (req: any, res: any) => {
  validateData(Fase)(req, res, async () => {
    const faseData = req.body;
    const fase = new Fase(faseData);

    const validationErrors = validateFase(fase);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');


      const insertFaseQuery = `
        INSERT INTO fase (descricao_fase)
        VALUES ($1)
        RETURNING id_fase`;

      const result = await client.query(insertFaseQuery, [
        fase.descricao_fase,
      ]);

      const insertedFaseId = result.rows[0].id_fase;

      await client.query('COMMIT');

      res.json({ message: 'Fase criada com sucesso', id_fase: insertedFaseId });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
