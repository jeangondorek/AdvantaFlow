import { Router } from "express";
import { controller }  from '../../imports'

const routeranexo = Router();

routeranexo.get('/anexo', controller.getallAnexo);
routeranexo.post('/anexo', controller.createAnexo);
routeranexo.put('/anexo/:id_anexo', controller.updateAnexo);
routeranexo.get('/anexo/:id_anexo', controller.getbyidAnexo);
routeranexo.delete('/anexo/:id_anexo', controller.deleteAnexo);

export { routeranexo };