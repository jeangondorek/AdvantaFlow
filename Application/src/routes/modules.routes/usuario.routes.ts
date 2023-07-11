import { Router } from "express";
import { controller }  from '../../imports'
import { authMiddleware } from "../../middleware/auth.middleware";

const routerusuario = Router();

routerusuario.get('/usuario', controller.usuario.getallUsuario);
routerusuario.post('/usuario', controller.usuario.createUsuario);
routerusuario.put('/usuario/:cpf_usuario', controller.usuario.updateUsuario);
routerusuario.get('/usuario/:cpf_usuario', authMiddleware, controller.usuario.getbycpfUsuario);
routerusuario.delete('/usuario/:cpf_usuario', controller.usuario.deleteUsuario);
routerusuario.post('/login', controller.login.login);

export { routerusuario };