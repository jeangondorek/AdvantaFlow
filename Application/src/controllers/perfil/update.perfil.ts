import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validatePerfil } from "../../middleware/validatedata/validate.perfil.middleware";
import { Perfil } from "../../models/perfil.model";

export const updatePerfil = async (req: any, res: any) => {
  validateData(Perfil)(req, res, async () => {
    const perfil = req.body;
    const id_perfil = req.params.id_perfil;

    const validationErrors = validatePerfil(perfil);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const selectQuery = "SELECT * FROM perfil WHERE id_perfil = $1";
      const selectResult = await client.query(selectQuery, [id_perfil]);

      if (selectResult.rows.length < 1) {
        return res.json('Registro não encontrado. Nada foi atualizado.');
      }

      const updatePerfilQuery = `
        UPDATE perfil 
        SET descricao_perfil = $1,
        permissoes_perfil = $2,
        permissoes_opcional_perfil = $3
        WHERE id_perfil = $4
        RETURNING id_perfil`;

      const result = await client.query(updatePerfilQuery, [
        perfil.descricao_perfil,
        perfil.permissoes_perfil,
        perfil.permissoes_opcional_perfil,
        id_perfil
      ]);

      const updatedIdPerfil = result.rows[0].id_perfil;

      await client.query('COMMIT');

      res.json({ message: 'Perfil atualizada corretamente', id_perfil: updatedIdPerfil });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
