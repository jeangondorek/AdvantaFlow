import { Router } from "express";
import { controller }  from '../../imports'

const routerfase = Router();

routerfase.get('/fase', controller.fase.getallFase);
routerfase.post('/fase', controller.fase.createFase);
routerfase.put('/fase/:id_fase', controller.fase.updateFase);
routerfase.get('/fase/:id_fase', controller.fase.getbyidFase);
routerfase.delete('/fase/:id_fase', controller.fase.deleteFase);

export { routerfase };