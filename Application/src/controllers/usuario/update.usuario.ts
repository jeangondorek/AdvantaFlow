import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { validateUsuario } from "../../middleware/validatedata/validate.usuario.middleware";
import { Usuario } from "../../models/usuario.model";

export const updateUsuario = async (req: any, res: any) => {
  validateData(Usuario)(req, res, async () => {
    const usuario = req.body;
    const cpf_usuario = req.params.cpf_usuario;

    const validationErrors = validateUsuario(usuario);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const selectQuery = "SELECT * FROM usuario WHERE cpf_usuario = $1";
      const selectResult = await client.query(selectQuery, [cpf_usuario]);

      if (selectResult.rows.length < 1) {
        return res.json('Registro não encontrado. Nada foi atualizado.');
      }

      const updateUsuarioQuery = `
        UPDATE usuario 
        SET nome_usuario = $1, status_usuario = $2, telefone_usuario = $3,
          oab_usuario = $4, senha_hash_usuario = $5, id_perfil_usuario = $6
        WHERE cpf_usuario = $7
        RETURNING cpf_usuario`;

      const result = await client.query(updateUsuarioQuery, [
        usuario.nome_usuario,
        usuario.status_usuario || 'Ativo',
        usuario.telefone_usuario,
        usuario.oab_usuario || null,
        usuario.senha_hash_usuario,
        usuario.id_perfil_usuario,
        cpf_usuario
      ]);

      const updatedCpfUsuario = result.rows[0].cpf_usuario;

      await client.query('COMMIT');

      res.json({ message: 'Usuário atualizado corretamente', cpf_usuario: updatedCpfUsuario });
    } catch (error) {
      await client.query('ROLLBACK');
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  });
};
