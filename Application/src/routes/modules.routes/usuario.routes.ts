import { Router } from 'express';
import { controller }  from '../../imports'
import { authMiddleware } from '../../middleware/auth.adm.middleware';

const routerusuario = Router();

routerusuario.get('/usuario', authMiddleware, controller.usuario.getallUsuario);
routerusuario.post('/usuario', controller.usuario.createUsuario); // TO-DO colocar authmiddleware em abiente de produção. Em dev deixado sem esse fix porque será necessário reiniciar o banco não tendo um usuário fixo como padrão
routerusuario.put('/usuario/:cpf_usuario', authMiddleware, controller.usuario.updateUsuario);
routerusuario.get('/usuario/:cpf_usuario', authMiddleware, controller.usuario.getbycpfUsuario);
routerusuario.delete('/usuario/:cpf_usuario', authMiddleware, controller.usuario.deleteUsuario);
routerusuario.post('/login', controller.login.login);

export { routerusuario };