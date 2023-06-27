import { Router } from "express";
import { controller }  from '../../imports'

const routertarefa = Router();

routertarefa.get('/tarefa', controller.getallTarefa);
routertarefa.post('/tarefa', controller.createTarefa);
routertarefa.put('/tarefa/:id_tarefa', controller.updateTarefa);
routertarefa.get('/tarefa/:id_tarefa', controller.getbyidTarefa);
routertarefa.delete('/tarefa/:id_tarefa', controller.deleteTarefa);

export { routertarefa };