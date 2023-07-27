import { pool } from "../../imports";
import { Execucao } from "../../models/execucao.model";
import { validateData } from "../../middleware/validate.middleware";
import { validateExecucao } from "../../middleware/validatedata/validate.execucao.middleware";

export const createExecucao = async (req: any, res: any) => {
  validateData(Execucao)(req, res, async () => {
    const execucaoData = req.body;
    const execucao = new Execucao(execucaoData);

    const validationErrors = validateExecucao(execucao);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const insertExecucaoQuery = `
        INSERT INTO execucao (cpf_usuario_execucao, id_processo_execucao)
        VALUES ($1, $2)
        RETURNING id_execucao`;

      const result = await client.query(insertExecucaoQuery, [
        execucao.cpf_usuario_execucao,
        execucao.id_processo_execucao,
      ]);

      const insertedExecucaoId = result.rows[0].id_execucao;

      await client.query('COMMIT');

      res.json({ message: 'Execucao criada com sucesso', id_execucao: insertedExecucaoId });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
