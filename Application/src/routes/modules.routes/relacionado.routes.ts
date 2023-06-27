import { Router } from "express";
import { controller }  from '../../imports'

const routerrelacionado = Router();

routerrelacionado.get('/relacionado', controller.relacionado.getallRelacionado);
routerrelacionado.post('/relacionado', controller.relacionado.createRelacionado);
routerrelacionado.put('/relacionado/:id_relacionado', controller.relacionado.updateRelacionado);
routerrelacionado.get('/relacionado/:id_relacionado', controller.relacionado.getbyidRelacionado);
routerrelacionado.delete('/relacionado/:id_relacionado', controller.relacionado.deleteRelacionado);

export { routerrelacionado };