import { Router } from "express";
import { controller }  from '../../imports'

const routerexecucao = Router();

routerexecucao.get('/execucao', controller.getallExecucao);
routerexecucao.post('/execucao', controller.createExecucao);
routerexecucao.put('/execucao/:id_execucao', controller.updateExecucao);
routerexecucao.get('/execucao/:id_execucao', controller.getbyidExecucao);
routerexecucao.delete('/execucao/:id_execucao', controller.deleteExecucao);

export { routerexecucao };