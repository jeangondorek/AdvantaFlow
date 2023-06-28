import { Router } from "express";
import { controller }  from '../../imports'

const routerperfil = Router();

routerperfil.get('/perfil', controller.perfil.getallPerfil);
routerperfil.post('/perfil', controller.perfil.createPerfil);
routerperfil.put('/perfil/:id_perfil', controller.perfil.updatePerfil);
routerperfil.get('/perfil/:id_perfil', controller.perfil.getbyidPerfil);
routerperfil.delete('/perfil/:id_perfil', controller.perfil.deletePerfil);

export { routerperfil };