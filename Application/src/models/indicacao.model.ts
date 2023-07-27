export class Indicacao {
    descricao_indicacao: string;
    detalhes_indicacao: string | null;
  
    constructor(data: any) {
      this.descricao_indicacao = data.descricao_indicacao;
      this.detalhes_indicacao = data.detalhes_indicacao;
    }
  }
  