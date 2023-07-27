import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateExecucao } from "../../middleware/validatedata/validate.execucao.middleware";
import { Execucao } from "../../models/execucao.model";

export const updateExecucao = async (req: any, res: any) => {
  validateData(Execucao)(req, res, async () => {
    const execucao = req.body;
    const id_execucao = req.params.id_execucao;

    const validationErrors = validateExecucao(execucao);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const selectQuery = "SELECT * FROM execucao WHERE id_execucao = $1";
      const selectResult = await client.query(selectQuery, [id_execucao]);

      if (selectResult.rows.length < 1) {
        return res.json('Registro não encontrado. Nada foi atualizado.');
      }
      
      const updateExecucaoQuery = `
        UPDATE execucao 
        SET cpf_usuario_execucao = $1,
        id_processo_execucao  = $2
        WHERE id_execucao = $3
        RETURNING id_execucao`;

      const result = await client.query(updateExecucaoQuery, [
        execucao.descricao_execucao,
        id_execucao
      ]);

      const updatedIdExecucao = result.rows[0].id_execucao;

      await client.query('COMMIT');

      res.json({ message: 'Execucao atualizada corretamente', id_execucao: updatedIdExecucao });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
