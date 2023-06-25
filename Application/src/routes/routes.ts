import { Router } from "express";
import { controller }  from '../imports'

const router = Router();

router.get('/comarca', controller.getallComarca);
router.post('/comarca', controller.createComarca);
router.put('/comarca/:id_comarca', controller.updateComarca);
router.get('/comarca/:id_comarca', controller.getbyidComarca);
router.delete('/comarca/:id_comarca', controller.deleteComarca);

router.get('/fase', controller.getallFase);
router.post('/fase', controller.createFase);
router.put('/fase/:id_fase', controller.updateFase);
router.get('/fase/:id_fase', controller.getbyidFase);
router.delete('/fase/:id_fase', controller.deleteFase);

router.get('/assunto', controller.getallAssunto);
router.post('/assunto', controller.createAssunto);
router.put('/assunto/:id_assunto', controller.updateAssunto);
router.get('/assunto/:id_assunto', controller.getbyidAssunto);
router.delete('/assunto/:id_assunto', controller.deleteAssunto);

router.get('/usuario', controller.getallUsuario);
router.post('/usuario', controller.createUsuario);
router.put('/usuario/:cpf_usuario', controller.updateUsuario);
router.get('/usuario/:cpf_usuario', controller.getbycpfUsuario);
router.delete('/usuario/:cpf_usuario', controller.deleteUsuario);


router.get('/perfil', controller.getallPerfil);
router.post('/perfil', controller.createPerfil);
router.put('/perfil/:id_perfil', controller.updatePerfil);
router.get('/perfil/:id_perfil', controller.getbyidPerfil);
router.delete('/perfil/:id_perfil', controller.deletePerfil);

export { router };