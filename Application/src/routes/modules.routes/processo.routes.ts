import { Router } from "express";
import { controller }  from '../../imports'

const routerprocesso = Router();

routerprocesso.get('/processo', controller.getallProcesso);
routerprocesso.post('/processo', controller.createProcesso);
routerprocesso.put('/processo/:id_processo', controller.updateProcesso);
routerprocesso.get('/processo/:id_processo', controller.getbyidProcesso);
routerprocesso.delete('/processo/:id_processo', controller.deleteProcesso);

export { routerprocesso };