import { Router } from "express";
import { controller }  from '../../imports'

const routerfase = Router();

routerfase.get('/fase', controller.getallFase);
routerfase.post('/fase', controller.createFase);
routerfase.put('/fase/:id_fase', controller.updateFase);
routerfase.get('/fase/:id_fase', controller.getbyidFase);
routerfase.delete('/fase/:id_fase', controller.deleteFase);

export { routerfase };