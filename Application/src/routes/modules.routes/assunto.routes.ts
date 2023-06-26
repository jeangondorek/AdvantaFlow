import { Router } from "express";
import { controller }  from '../../imports'

const routerassunto = Router();

routerassunto.get('/assunto', controller.getallAssunto);
routerassunto.post('/assunto', controller.createAssunto);
routerassunto.put('/assunto/:id_assunto', controller.updateAssunto);
routerassunto.get('/assunto/:id_assunto', controller.getbyidAssunto);
routerassunto.delete('/assunto/:id_assunto', controller.deleteAssunto);

export { routerassunto };