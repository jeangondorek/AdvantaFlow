import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateTarefa } from "../../middleware/validatedata/validate.tarefa.middleware";
import { Tarefa } from "../../models/tarefa.model";

export const updateTarefa = async (req: any, res: any) => {
  validateData(Tarefa)(req, res, async () => {
    const tarefaData = req.body;
    const id_tarefa = req.params.id_tarefa;

    const validationErrors = validateTarefa(tarefaData);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const selectQuery = "SELECT * FROM tarefa WHERE id_tarefa = $1";
      const selectResult = await client.query(selectQuery, [id_tarefa]);

      if (selectResult.rows.length < 1) {
        return res.json('Registro não encontrado. Nada foi atualizado.');
      }

      const updateTarefaQuery = `
        UPDATE tarefa 
        SET funcao_tarefa = $1,
          detalhes_tarefa = $2,
          data_criacao_tarefa = $3,
          id_processo_tarefa = $4
        WHERE id_tarefa = $5
        RETURNING id_tarefa`;

      const result = await client.query(updateTarefaQuery, [
        tarefaData.funcao_tarefa,
        tarefaData.detalhes_tarefa || null,
        tarefaData.data_criacao_tarefa,
        tarefaData.id_processo_tarefa,
        id_tarefa
      ]);

      const updatedIdTarefa = result.rows[0].id_tarefa;

      await client.query('COMMIT');

      res.json({ message: 'Tarefa atualizada corretamente', id_tarefa: updatedIdTarefa });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
