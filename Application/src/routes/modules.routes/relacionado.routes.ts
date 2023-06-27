import { Router } from "express";
import { controller }  from '../../imports'

const routerrelacionado = Router();

routerrelacionado.get('/relacionado', controller.getallRelacionado);
routerrelacionado.post('/relacionado', controller.createRelacionado);
routerrelacionado.put('/relacionado/:id_relacionado', controller.updateRelacionado);
routerrelacionado.get('/relacionado/:id_relacionado', controller.getbyidRelacionado);
routerrelacionado.delete('/relacionado/:id_relacionado', controller.deleteRelacionado);

export { routerrelacionado };