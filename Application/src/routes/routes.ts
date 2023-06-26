import { Router } from 'express';
import { routerassunto } from './modules.routes/assunto.routes';
import { routercomarca } from './modules.routes/comarca.routes';
import { routerindicacao } from './modules.routes/indicacao.routes';
import { routerusuario } from './modules.routes/usuario.routes';
import { routerperfil } from './modules.routes/perfil.routes';
import { routerfase } from './modules.routes/fase.routes';
import { routeranexo } from './modules.routes/anexo.routes';
import { routercliente } from './modules.routes/cliente.routes';
import { routerprocesso } from './modules.routes/processo.routes';
import { routertarefa } from './modules.routes/tarefa.routes';

const router = Router();

router.use(routeranexo);

router.use(routercomarca);

router.use(routerassunto);

router.use(routerindicacao);

router.use(routerfase);

router.use(routerperfil);

router.use(routerusuario);

router.use(routercliente);

router.use(routerprocesso);

router.use(routertarefa);

export { router };