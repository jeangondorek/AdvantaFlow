export const validateData = (Model: any) => {
  const requiredFields = Object.keys(new Model({}));

  return (req: any, res: any, next: any) => {
    const data = req.body;
    const errors: string[] = [];

    for (const field of requiredFields) {
      if (!data[field]) {
        errors.push(`O campo ${field} é obrigatório.`);
      }
    }

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    next();
  };
};
