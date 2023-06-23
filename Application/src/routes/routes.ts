import { Router } from "express";
import { controller }  from '../imports'

const router = Router();

router.get('/comarca', controller.getallComarca);
router.post('/comarca', controller.createComarca);
router.put('/comarca/:id_comarca', controller.updateComarca);
router.get('/comarca/:id_comarca', controller.getbyidComarca);
router.delete('/comarca/:id_comarca', controller.deleteComarca);

router.get('/fase', controller.getallFase);
router.post('/fase', controller.createFase);

router.get('/assunto', controller.getallAssunto);
router.post('/assunto', controller.createAssunto);

export { router };