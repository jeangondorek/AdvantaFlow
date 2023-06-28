import { pool } from "../../imports";
import { Assunto } from "../../models/assunto.model";
import { validateData } from "../../middleware/validate.middleware";

export const createAssunto = async (req: any, res: any) => {
  validateData(Assunto)(req, res, async () => {
    const assuntoData = req.body;
    const assunto = new Assunto(assuntoData);

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const insertAssuntoQuery = `
        INSERT INTO assunto (descricao_assunto)
        VALUES ($1)
        RETURNING id_assunto`;

      const result = await client.query(insertAssuntoQuery, [
        assunto.descricao_assunto,
      ]);

      const insertedAssuntoId = result.rows[0].id_assunto;

      await client.query('COMMIT');

      res.json({ message: 'Inserido corretamente', id_assunto: insertedAssuntoId });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
