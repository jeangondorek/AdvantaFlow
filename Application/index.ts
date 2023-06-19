import express from 'express';
import 'dotenv/config';
import * as cors from 'cors';

const app = express();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const origin = process.env.ORIGIN || '*';

const corsOptions = {
  origin: origin.split(','),
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors({
    origin: origin.split(','),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));


app.use(express.json());

app.use('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`Example app listening on port ${port} env ${env}!`);
    }
);
