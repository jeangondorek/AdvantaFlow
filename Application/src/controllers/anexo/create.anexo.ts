import { pool } from "../../imports";
import { Anexo } from "../../models/anexo.model";
import { validateData } from "../../middleware/validate.middleware";
import { validateAnexo } from "../../middleware/validatedata/validate.anexo.middleware";

export const createAnexo = async (req: any, res: any) => {
  validateData(Anexo)(req, res, async () => {
    const anexoData = req.body;
    const anexo = new Anexo(anexoData);

    const validationErrors = validateAnexo(anexo);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const insertAnexoQuery = `
        INSERT INTO anexo (id_tarefa_anexo, nome_anexo, formato_anexo, tamanho_anexo, data_carregamento_anexo, caminho_arquivo_anexo)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id_anexo`;

      const result = await client.query(insertAnexoQuery, [
        anexo.id_tarefa_anexo,
        anexo.nome_anexo,
        anexo.formato_anexo,
        anexo.tamanho_anexo,
        anexo.data_carregamento_anexo,
        anexo.caminho_arquivo_anexo
      ]);

      const insertedAnexoId = result.rows[0].id_anexo;

      await client.query('COMMIT');

      res.json({ message: 'Inserido corretamente', id_anexo: insertedAnexoId });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
