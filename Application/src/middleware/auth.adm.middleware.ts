import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { pool } from "../imports";

declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido' });
  }

  const jwtSecret = process.env.JWT_SECRET || 'mysecret';

  jwt.verify(token, jwtSecret, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ error: 'Token de autenticação inválido' });
    }

    req.user = decoded;
    pool.connect((error, client, release) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        client.query('SELECT id_perfil_usuario FROM usuario WHERE cpf_usuario = $1', [req.user.cpf_usuario], (queryError, result) => {
        release();

        if (queryError) {
          return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }
        const [perfil] = [result.rows[0]];
        if(perfil.id_perfil_usuario != 1){
          return res.status(403).json({ error: 'Você não tem acesso a essa rota' });
        }
        else{
          next();
        }
      });
    });
  });
};
