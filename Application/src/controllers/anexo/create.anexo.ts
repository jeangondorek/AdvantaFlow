import { pool } from "../../imports";
import { validarAnexo } from "../../middleware/validate.anexo";
import { Anexo } from "../../models/anexo.model";

export const createAnexo = async (req: any, res: any) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN'); // Inicia a transação

    // Chama o middleware de validação antes de criar o anexo
    validarAnexo(req, res, async () => {
      const anexoData = req.body;
      const anexo = new Anexo(anexoData);

      await anexo.save();

      const insertedAnexoId = anexo.id_anexo; // Obtém o ID do anexo inserido

      await client.query('COMMIT'); // Confirma a transação

      res.json({ message: 'Inserido corretamente', id_anexo: insertedAnexoId });
    });
  } catch (error) {
    await client.query('ROLLBACK'); // Reverte a transação em caso de erro
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  } finally {
    client.release();
  }
};
