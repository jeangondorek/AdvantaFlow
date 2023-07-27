import { pool } from "../../imports";
import { Usuario } from "../../models/usuario.model";
import { validateData } from "../../middleware/validate.middleware";
import { validateUsuario } from "../../middleware/validatedata/validate.usuario.middleware";

export const createUsuario = async (req: any, res: any) => {
  validateData(Usuario)(req, res, async () => {
    const usuarioData = req.body;
    const usuario = new Usuario(usuarioData);

    const validationErrors = validateUsuario(usuario);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const insertUsuarioQuery = `
        INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario,
          oab_usuario, senha_hash_usuario, id_perfil_usuario)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING cpf_usuario`;

      const result = await client.query(insertUsuarioQuery, [
        usuario.cpf_usuario,
        usuario.nome_usuario,
        usuario.status_usuario || 'Ativo',
        usuario.telefone_usuario,
        usuario.oab_usuario || null,
        usuario.senha_hash_usuario,
        usuario.id_perfil_usuario,
      ]);

      const insertedCpfUsuario = result.rows[0].cpf_usuario;

      await client.query('COMMIT');

      res.json({ message: 'Usuário criado com sucesso', cpf_usuario: insertedCpfUsuario });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
