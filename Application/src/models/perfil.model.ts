export class Perfil {
    descricao_perfil: string;
    permissoes_perfil: string;
    permissoes_opcional_perfil: string | null;
  
    constructor(data: any) {
      this.descricao_perfil = data.descricao_perfil;
      this.permissoes_perfil = data.permissoes_perfil;
      this.permissoes_opcional_perfil = data.permissoes_opcional_perfil;
    }
  }
  