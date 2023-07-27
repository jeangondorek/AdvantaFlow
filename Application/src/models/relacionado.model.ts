export class Relacionado {
    cpf_usuario_relacionado: string;
    id_tarefa_relacionado: number;
  
    constructor(data: any) {
      this.cpf_usuario_relacionado = data.cpf_usuario_relacionado;
      this.id_tarefa_relacionado = data.id_tarefa_relacionado;
    }
  }
  