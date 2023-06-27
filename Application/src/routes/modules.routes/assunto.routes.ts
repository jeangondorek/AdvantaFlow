import { Router } from "express";
import { controller }  from '../../imports'

const routerassunto = Router();

routerassunto.get('/assunto', controller.assunto.getallAssunto);
routerassunto.post('/assunto', controller.assunto.createAssunto);
routerassunto.put('/assunto/:id_assunto', controller.assunto.updateAssunto);
routerassunto.get('/assunto/:id_assunto', controller.assunto.getbyidAssunto);
routerassunto.delete('/assunto/:id_assunto', controller.assunto.deleteAssunto);

export { routerassunto };