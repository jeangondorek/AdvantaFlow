import { Router } from "express";
import { controller }  from '../../imports'

const routerperfil = Router();

routerperfil.get('/perfil', controller.getallPerfil);
routerperfil.post('/perfil', controller.createPerfil);
routerperfil.put('/perfil/:id_perfil', controller.updatePerfil);
routerperfil.get('/perfil/:id_perfil', controller.getbyidPerfil);
routerperfil.delete('/perfil/:id_perfil', controller.deletePerfil);

export { routerperfil };