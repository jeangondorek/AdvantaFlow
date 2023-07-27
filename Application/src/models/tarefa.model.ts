export class Tarefa {
    funcao_tarefa: string;
    detalhes_tarefa: string | null;
    data_criacao_tarefa: Date;
    id_processo_tarefa: number;
  
    constructor(data: any) {
      this.funcao_tarefa = data.funcao_tarefa;
      this.detalhes_tarefa = data.detalhes_tarefa || null;
      this.data_criacao_tarefa = new Date(data.data_criacao_tarefa);
      this.id_processo_tarefa = data.id_processo_tarefa;
    }
  }
  