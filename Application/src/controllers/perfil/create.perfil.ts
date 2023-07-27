import { pool } from "../../imports";
import { Perfil } from "../../models/perfil.model";
import { validateData } from "../../middleware/validate.middleware";
import { validatePerfil } from "../../middleware/validatedata/validate.perfil.middleware";

export const createPerfil = async (req: any, res: any) => {
  validateData(Perfil)(req, res, async () => {
    const perfilData = req.body;
    const perfil = new Perfil(perfilData);

    const validationErrors = validatePerfil(perfil);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');
    
      const insertPerfilQuery = `
        INSERT INTO perfil (descricao_perfil, permissoes_perfil,permissoes_opcional_perfil)
        VALUES ($1, $2, $3)
        RETURNING id_perfil`;

      const result = await client.query(insertPerfilQuery, [
        perfil.descricao_perfil,
        perfil.permissoes_perfil,
        perfil.permissoes_opcional_perfil,
      ]);

      const insertedPerfilId = result.rows[0].id_perfil;

      await client.query('COMMIT');

      res.json({ message: 'Perfil criada com sucesso', id_perfil: insertedPerfilId });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
