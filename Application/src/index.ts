import express, { Request, Response } from "express";
import {port} from './Config/Config'

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hi Docker!!!");
});

app.listen(port);
