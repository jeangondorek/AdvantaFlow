import { Anexo } from "../models/anexo.model";

export const validarAnexo = (req: any, res: any, next: any) => {
  const anexoData = req.body;
  const anexo = new Anexo(anexoData);
  const errors = anexo.validate();

  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

  next();
};