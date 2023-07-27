import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateRelacionado } from "../../middleware/validatedata/validate.relacionado.middleware";
import { Relacionado } from "../../models/relacionado.model";

export const createRelacionado = async (req: any, res: any) => {
  
    const relacionadoData = req.body;
    const relacionado = new Relacionado(relacionadoData);

    const validationErrors = validateRelacionado(relacionado);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const insertRelacionadoQuery = `
        INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado)
        VALUES ($1, $2)
        RETURNING id_relacionado`;

      const result = await client.query(insertRelacionadoQuery, [
        relacionado.cpf_usuario_relacionado,
        relacionado.id_tarefa_relacionado,
      ]);

      const insertedRelacionadoId = result.rows[0].id_relacionado;

      await client.query('COMMIT');

      res.json({ message: 'Relacionado criado com sucesso', id_relacionado: insertedRelacionadoId });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
};
