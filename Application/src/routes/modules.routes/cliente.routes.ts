import { Router } from "express";
import { controller }  from '../../imports'

const routercliente = Router();

routercliente.get('/cliente', controller.cliente.getallCliente);
routercliente.post('/cliente', controller.cliente.createCliente);
routercliente.put('/cliente/:cpf_cnpj_cliente', controller.cliente.updateCliente);
routercliente.get('/cliente/:cpf_cnpj_cliente', controller.cliente.getbycpfCliente);
routercliente.delete('/cliente/:cpf_cnpj_cliente', controller.cliente.deleteCliente);

export { routercliente };