import { Router } from "express";
import { controller }  from '../../imports'

const routerindicacao = Router();

routerindicacao.get('/indicacao', controller.getallIndicacao);
routerindicacao.post('/indicacao', controller.createIndicacao);
routerindicacao.put('/indicacao/:id_indicacao', controller.updateIndicacao);
routerindicacao.get('/indicacao/:id_indicacao', controller.getbyidIndicacao);
routerindicacao.delete('/indicacao/:id_indicacao', controller.deleteIndicacao);

export { routerindicacao };