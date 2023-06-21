import { Router } from "express";
import { controller }  from '../imports'

const router = Router();

router.get('/exemplo', controller.getAll);

export { router };