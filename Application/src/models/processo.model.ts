export class Processo {
    numero_cnpj_processo: string;
    descricao_processo: string;
    titulo_processo: string;
    resultado_processo: string | null;
    data_criacao_processo: Date;
    id_comarca_processo: number;
    id_assunto_processo: number;
    id_fase_processo: number;
    cpf_cnpj_cliente_processo: string;
    cpf_usuario_processo: string;
  
    constructor(data: any) {
      this.numero_cnpj_processo = data.numero_cnpj_processo;
      this.descricao_processo = data.descricao_processo;
      this.titulo_processo = data.titulo_processo;
      this.resultado_processo = data.resultado_processo || null;
      this.data_criacao_processo =  data.data_criacao_processo;
      this.id_comarca_processo = data.id_comarca_processo;
      this.id_assunto_processo = data.id_assunto_processo;
      this.id_fase_processo = data.id_fase_processo;
      this.cpf_cnpj_cliente_processo = data.cpf_cnpj_cliente_processo;
      this.cpf_usuario_processo = data.cpf_usuario_processo;
    }
  }
  