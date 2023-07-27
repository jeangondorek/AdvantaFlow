export class Execucao {
    cpf_usuario_execucao: string;
    id_processo_execucao: number;
  
    constructor(data: any) {
      this.cpf_usuario_execucao = data.cpf_usuario_execucao;
      this.id_processo_execucao = data.id_processo_execucao;
    }
  }
  