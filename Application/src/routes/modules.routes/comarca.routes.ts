import { Router } from "express";
import { controller }  from '../../imports'

const routercomarca = Router();

routercomarca.get('/comarca', controller.comarca.getallComarca);
routercomarca.post('/comarca', controller.comarca.createComarca);
routercomarca.put('/comarca/:id_comarca', controller.comarca.updateComarca);
routercomarca.get('/comarca/:id_comarca', controller.comarca.getbyidComarca);
routercomarca.delete('/comarca/:id_comarca', controller.comarca.deleteComarca);

export { routercomarca };