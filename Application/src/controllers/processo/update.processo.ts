import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateProcesso } from "../../middleware/validatedata/validate.processo.middleware";
import { Processo } from "../../models/processo.model";

export const updateProcesso = async (req: any, res: any) => {
  validateData(Processo)(req, res, async () => {
    const processoData = req.body;
    const id_processo = req.params.id_processo;

    const validationErrors = validateProcesso(processoData);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const selectQuery = "SELECT * FROM processo WHERE id_processo = $1";
      const selectResult = await client.query(selectQuery, [id_processo]);

      if (selectResult.rows.length < 1) {
        return res.json('Registro não encontrado. Nada foi atualizado.');
      }

      const updateProcessoQuery = `
        UPDATE processo 
        SET numero_cnpj_processo = $1,
          descricao_processo = $2,
          titulo_processo = $3,
          resultado_processo = $4,
          data_criacao_processo = $5,
          id_comarca_processo = $6,
          id_assunto_processo = $7,
          id_fase_processo = $8,
          cpf_cnpj_cliente_processo = $9,
          cpf_usuario_processo = $10
        WHERE id_processo = $11
        RETURNING id_processo`;

      const result = await client.query(updateProcessoQuery, [
        processoData.numero_cnpj_processo,
        processoData.descricao_processo,
        processoData.titulo_processo,
        processoData.resultado_processo || null,
        processoData.data_criacao_processo,
        processoData.id_comarca_processo,
        processoData.id_assunto_processo,
        processoData.id_fase_processo,
        processoData.cpf_cnpj_cliente_processo,
        processoData.cpf_usuario_processo,
        id_processo
      ]);

      const updatedIdProcesso = result.rows[0].id_processo;

      await client.query('COMMIT');

      res.json({ message: 'Processo atualizado corretamente', id_processo: updatedIdProcesso });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
