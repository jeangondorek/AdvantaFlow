import { Router } from "express";
import { controller }  from '../../imports'

const routerindicacao = Router();

routerindicacao.get('/indicacao', controller.indicacao.getallIndicacao);
routerindicacao.post('/indicacao', controller.indicacao.createIndicacao);
routerindicacao.put('/indicacao/:id_indicacao', controller.indicacao.updateIndicacao);
routerindicacao.get('/indicacao/:id_indicacao', controller.indicacao.getbyidIndicacao);
routerindicacao.delete('/indicacao/:id_indicacao', controller.indicacao.deleteIndicacao);

export { routerindicacao };