import { pool } from "../../imports";
import { Comarca } from "../../models/comarca.model";
import { validateData } from "../../middleware/validate.middleware";
import { validateComarca } from "../../middleware/validatedata/validate.comarca.middleware";

export const createComarca = async (req: any, res: any) => {
  validateData(Comarca)(req, res, async () => {
    const comarcaData = req.body;
    const comarca = new Comarca(comarcaData);

    const validationErrors = validateComarca(comarca);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const insertComarcaQuery = `
        INSERT INTO comarca (descricao_comarca)
        VALUES ($1)
        RETURNING id_comarca`;

      const result = await client.query(insertComarcaQuery, [
        comarca.descricao_comarca,
      ]);

      const insertedComarcaId = result.rows[0].id_comarca;

      await client.query('COMMIT');

      res.json({ message: 'Comarca criada com sucesso', id_comarca: insertedComarcaId });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
