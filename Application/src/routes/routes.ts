import { Router } from "express";

const router = Router();

router.get('/h', (req, res) => {
    res.send('Hello World');
});

export { router };