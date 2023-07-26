import { Router } from 'express';
import { controller }  from '../../imports';

const routerusuario = Router();

routerusuario.get('/usuario', controller.usuario.getallUsuario);
routerusuario.post('/usuario', controller.usuario.createUsuario); // TO-DO colocar authmiddleware em abiente de produção. Em dev deixado sem esse fix porque será necessário reiniciar o banco não tendo um usuário fixo como padrão
routerusuario.put('/usuario/:cpf_usuario',  controller.usuario.updateUsuario);
routerusuario.get('/usuario/:cpf_usuario', controller.usuario.getbycpfUsuario);
routerusuario.delete('/usuario/:cpf_usuario', controller.usuario.deleteUsuario);
routerusuario.post('/login', controller.login.login);

export { routerusuario };