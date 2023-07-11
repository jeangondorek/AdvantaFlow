import bcrypt from 'bcryptjs';
import { pool } from "../../imports";

export const createUsuario = async (req: any, res: any) => {
  pool.connect((error, client, release) => {
    if (error) {
      return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
    }

    const usuario = req.body;

    // Gerar o hash da senha
    bcrypt.hash(usuario.senha_hash_usuario, 10, (hashError, hashedPassword) => {
      if (hashError) {
        release();
        return res.status(500).json({ error: 'Erro ao gerar o hash da senha' });
      }

      client.query(
        "INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES($1, $2, $3, $4, $5, $6, $7);",
        [usuario.cpf_usuario, usuario.nome_usuario, usuario.status_usuario, usuario.telefone_usuario, usuario.oab_usuario, hashedPassword, usuario.id_perfil_usuario],
        (queryError, result) => {
          release();

          if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
          }

          res.json(result.rows);
        }
      );
    });
  });
};
