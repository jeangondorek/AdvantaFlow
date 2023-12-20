import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { pool } from "../imports";

declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}

export const authadmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido' });
  }

  const jwtSecret = process.env.JWT_SECRET || 'mysecret';

  try {
    const decoded = jwt.verify(token, jwtSecret) as any;

    req.user = decoded;

    const client = await pool.connect();

    try {
      const result = await client.query('SELECT id_perfil_usuario FROM usuario WHERE cpf_usuario = $1', [req.user.cpf_usuario]);

      const [perfil] = result.rows;

      if (perfil && perfil.id_perfil_usuario !== 1) {
        return res.status(403).json({ error: 'Você não tem acesso a essa rota' });
      }

      next();
    } catch (queryError) {
      return res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
      client.release();
    }
  } catch (err) {
    return res.status(401).json({ error: 'Token de autenticação inválido' });
  }
};
