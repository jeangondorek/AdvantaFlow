export class Anexo {
  id_tarefa_anexo: number;
  nome_anexo: string;
  formato_anexo: string;
  tamanho_anexo: number;
  data_carregamento_anexo: Date;
  caminho_arquivo_anexo: string;

  constructor(data: any) {
    this.id_tarefa_anexo = data.id_tarefa_anexo;
    this.nome_anexo = data.nome_anexo;
    this.formato_anexo = data.formato_anexo;
    this.tamanho_anexo = data.tamanho_anexo;
    this.data_carregamento_anexo = data.data_carregamento_anexo;
    this.caminho_arquivo_anexo = data.caminho_arquivo_anexo;
  }
}
