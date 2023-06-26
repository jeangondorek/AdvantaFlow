import { Router } from "express";
import { controller }  from '../../imports'

const routerusuario = Router();

routerusuario.get('/usuario', controller.getallUsuario);
routerusuario.post('/usuario', controller.createUsuario);
routerusuario.put('/usuario/:cpf_usuario', controller.updateUsuario);
routerusuario.get('/usuario/:cpf_usuario', controller.getbycpfUsuario);
routerusuario.delete('/usuario/:cpf_usuario', controller.deleteUsuario);

export { routerusuario };