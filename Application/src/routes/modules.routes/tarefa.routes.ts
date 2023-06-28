import { Router } from "express";
import { controller }  from '../../imports'

const routertarefa = Router();

routertarefa.get('/tarefa', controller.tarefa.getallTarefa);
routertarefa.post('/tarefa', controller.tarefa.createTarefa);
routertarefa.put('/tarefa/:id_tarefa', controller.tarefa.updateTarefa);
routertarefa.get('/tarefa/:id_tarefa', controller.tarefa.getbyidTarefa);
routertarefa.delete('/tarefa/:id_tarefa', controller.tarefa.deleteTarefa);

export { routertarefa };