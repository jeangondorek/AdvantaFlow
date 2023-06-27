import { Router } from "express";
import { controller }  from '../../imports'

const routercomarca = Router();

routercomarca.get('/comarca', controller.getallComarca);
routercomarca.post('/comarca', controller.createComarca);
routercomarca.put('/comarca/:id_comarca', controller.updateComarca);
routercomarca.get('/comarca/:id_comarca', controller.getbyidComarca);
routercomarca.delete('/comarca/:id_comarca', controller.deleteComarca);

export { routercomarca };