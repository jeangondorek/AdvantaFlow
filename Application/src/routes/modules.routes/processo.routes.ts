import { Router } from "express";
import { controller, authadvMiddleware }  from '../../imports'

const routerprocesso = Router();

routerprocesso.get('/processo', authadvMiddleware, controller.processo.getallProcesso);
routerprocesso.post('/processo', authadvMiddleware, controller.processo.createProcesso);
routerprocesso.put('/processo/:id_processo', authadvMiddleware, controller.processo.updateProcesso);
routerprocesso.get('/processo/:id_processo', authadvMiddleware, controller.processo.getbyidProcesso);
routerprocesso.delete('/processo/:id_processo', authadvMiddleware, controller.processo.deleteProcesso);

export { routerprocesso };