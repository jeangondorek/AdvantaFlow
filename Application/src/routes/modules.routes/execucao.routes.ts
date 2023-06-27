import { Router } from "express";
import { controller }  from '../../imports'

const routerexecucao = Router();

routerexecucao.get('/execucao', controller.execucao.getallExecucao);
routerexecucao.post('/execucao', controller.execucao.createExecucao);
routerexecucao.put('/execucao/:id_execucao', controller.execucao.updateExecucao);
routerexecucao.get('/execucao/:id_execucao', controller.execucao.getbyidExecucao);
routerexecucao.delete('/execucao/:id_execucao', controller.execucao.deleteExecucao);

export { routerexecucao };