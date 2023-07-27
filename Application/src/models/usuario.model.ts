export class Usuario {
    cpf_usuario: string;
    nome_usuario: string;
    status_usuario: string;
    telefone_usuario: string;
    oab_usuario: string | null;
    senha_hash_usuario: string;
    id_perfil_usuario: number;
  
    constructor(data: any) {
      this.cpf_usuario = data.cpf_usuario;
      this.nome_usuario = data.nome_usuario;
      this.status_usuario = data.status_usuario || 'Ativo';
      this.telefone_usuario = data.telefone_usuario;
      this.oab_usuario = data.oab_usuario;
      this.senha_hash_usuario = data.senha_hash_usuario;
      this.id_perfil_usuario = data.id_perfil_usuario;
    }
  }
  