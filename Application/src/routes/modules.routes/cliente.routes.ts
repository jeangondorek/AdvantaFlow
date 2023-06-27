import { Router } from "express";
import { controller }  from '../../imports'

const routercliente = Router();

routercliente.get('/cliente', controller.getallCliente);
routercliente.post('/cliente', controller.createCliente);
routercliente.put('/cliente/:cpf_cnpj_cliente', controller.updateCliente);
routercliente.get('/cliente/:cpf_cnpj_cliente', controller.getbycpfCliente);
routercliente.delete('/cliente/:cpf_cnpj_cliente', controller.deleteCliente);

export { routercliente };