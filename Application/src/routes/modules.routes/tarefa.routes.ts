import { Router } from "express";
import { controller, authanyMiddleware }  from '../../imports'

const routertarefa = Router();

routertarefa.get('/tarefa', authanyMiddleware, controller.tarefa.getallTarefa);
routertarefa.post('/tarefa', authanyMiddleware, controller.tarefa.createTarefa);
routertarefa.put('/tarefa/:id_tarefa', authanyMiddleware, controller.tarefa.updateTarefa);
routertarefa.get('/tarefa/:id_tarefa', authanyMiddleware, controller.tarefa.getbyidTarefa);
routertarefa.delete('/tarefa/:id_tarefa', authanyMiddleware, controller.tarefa.deleteTarefa);

export { routertarefa };