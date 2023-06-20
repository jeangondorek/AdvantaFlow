import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router } from './routes/routes';

const server = express();

export const port = process.env.PORT ?? 3000;
export const env = process.env.NODE_ENV ?? 'development';
const origin = process.env.ORIGIN ?? '*';

const corsOptions = {
  origin: origin.split(','),
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

server.use(cors(corsOptions));

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`Rodando em ${env} na porta ${port}`);
});

server.use(router);

export { server };