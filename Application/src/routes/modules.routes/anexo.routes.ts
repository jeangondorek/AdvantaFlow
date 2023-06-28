import { Router } from "express";
import { controller }  from '../../imports'

const routeranexo = Router();

routeranexo.get('/anexo', controller.anexo.getallAnexo);
routeranexo.post('/anexo', controller.anexo.createAnexo);
routeranexo.put('/anexo/:id_anexo', controller.anexo.updateAnexo);
routeranexo.get('/anexo/:id_anexo', controller.anexo.getbyidAnexo);
routeranexo.delete('/anexo/:id_anexo', controller.anexo.deleteAnexo);

export { routeranexo };