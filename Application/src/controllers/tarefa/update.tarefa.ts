import { pool } from "../../imports";

export const updateTarefa = async (req: any, res: any) => {
  pool.connect((error, client, release) => {
    if (error) {
      return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
    }

    const id_tarefa = req.params.id_tarefa;
    const tarefa = req.body;

    client.query(
      "UPDATE tarefa SET funcao_tarefa = $1, detalhes_tarefa = $2, data_criacao_tarefa = $3 WHERE id_tarefa = $4",
      [tarefa.funcao_tarefa, tarefa.detalhes_tarefa, tarefa.data_criacao_tarefa, id_tarefa],
      (queryError, result) => {
        release();

        if (queryError) {
          return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
      }
    );
  });
};
