import { pool } from "../../imports";

export const updateProcesso = async (req: any, res: any) => {
  pool.connect((error, client, release) => {
    if (error) {
      return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
    }

    const id_processo = req.params.id_processo;
    const processo = req.body;

    client.query(
      "UPDATE processo SET descricao_processo = $1, titulo_processo = $2, resultado_processo = $3 WHERE id_processo = $4",
      [processo.descricao_processo, processo.titulo_processo, processo.resultado_processo, id_processo],
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
