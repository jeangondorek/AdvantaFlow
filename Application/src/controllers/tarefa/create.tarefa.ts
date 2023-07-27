import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateTarefa } from "../../middleware/validatedata/validate.tarefa.middleware";
import { Tarefa } from "../../models/tarefa.model";

export const createTarefa = async (req: any, res: any) => {
    const tarefaData = req.body;
    const tarefa = new Tarefa(tarefaData);

    const validationErrors = validateTarefa(tarefa);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const insertTarefaQuery = `
      INSERT INTO tarefa (
        funcao_tarefa,
        detalhes_tarefa,
        data_criacao_tarefa,
        id_processo_tarefa
      )
      VALUES ($1, $2, $3, $4)
      RETURNING id_tarefa`;

      const result = await client.query(insertTarefaQuery, [
        tarefa.funcao_tarefa,
        tarefa.detalhes_tarefa || null,
        tarefa.data_criacao_tarefa,
        tarefa.id_processo_tarefa
      ]);


      const insertedTarefaId = result.rows[0].id_tarefa;

      await client.query('COMMIT');

      res.json({ message: 'Tarefa criada com sucesso', id_tarefa: insertedTarefaId });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
};
