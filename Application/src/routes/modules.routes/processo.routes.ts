import { Router } from "express";
import { controller }  from '../../imports'

const routerprocesso = Router();

routerprocesso.get('/processo', controller.processo.getallProcesso);
routerprocesso.post('/processo', controller.processo.createProcesso);
routerprocesso.put('/processo/:id_processo', controller.processo.updateProcesso);
routerprocesso.get('/processo/:id_processo', controller.processo.getbyidProcesso);
routerprocesso.delete('/processo/:id_processo', controller.processo.deleteProcesso);

export { routerprocesso };