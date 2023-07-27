import bcrypt from 'bcryptjs';
import { pool } from "../../imports";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const login = async (req: any, res: any) => {
  const { cpf_usuario, senha_hash_usuario } = req.body;

  pool.connect((error, client, release) => {
    if (error) {
      return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
    }

    client.query(
      'SELECT * FROM usuario WHERE cpf_usuario = $1',
      [cpf_usuario],
      (queryError, result) => {
        release();

        if (queryError) {
          return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        if (result.rows.length === 0) {
          return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const usuario = result.rows[0];
        
        bcrypt.compare(senha_hash_usuario, usuario.senha_hash_usuario, (compareError, isMatch) => {
          if (compareError || !isMatch) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
          }

          const jwtsecret = process.env.JWT_SECRET || 'mysecret';
          const token = jwt.sign({ cpf_usuario: usuario.cpf_usuario }, jwtsecret, { expiresIn: '1h' });

          res.cookie('token', token, { maxAge: 3600000, httpOnly: true });

          res.json({ message: 'Login bem-sucedido', token: token });
        });

      }
    );
  });
};
