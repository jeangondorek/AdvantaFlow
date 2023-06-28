import { pool } from "../imports";

export class Anexo {
  id_anexo: number;
  id_tarefa_anexo: number;
  nome_anexo: string;
  formato_anexo: string;
  tamanho_anexo: number;
  data_carregamento_anexo: Date;
  caminho_arquivo_anexo: string;

  constructor(data: any) {
    this.id_anexo = data.id_anexo;
    this.id_tarefa_anexo = data.id_tarefa_anexo;
    this.nome_anexo = data.nome_anexo;
    this.formato_anexo = data.formato_anexo;
    this.tamanho_anexo = data.tamanho_anexo;
    this.data_carregamento_anexo = data.data_carregamento_anexo;
    this.caminho_arquivo_anexo = data.caminho_arquivo_anexo;
  }

  static async findById(id: number): Promise<Anexo | null> {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM anexo WHERE id_anexo = $1', [id]);
      if (result.rows.length > 0) {
        return new Anexo(result.rows[0]);
      }
      return null;
    } finally {
      client.release();
    }
  }

  async save(): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const insertAnexoQuery = `
        INSERT INTO anexo (id_tarefa_anexo, nome_anexo, formato_anexo, tamanho_anexo, data_carregamento_anexo, caminho_arquivo_anexo)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id_anexo`;

      const result = await client.query(insertAnexoQuery, [
        this.id_tarefa_anexo,
        this.nome_anexo,
        this.formato_anexo,
        this.tamanho_anexo,
        this.data_carregamento_anexo,
        this.caminho_arquivo_anexo
      ]);

      this.id_anexo = result.rows[0].id_anexo;

      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  async update(): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const updateAnexoQuery = `
        UPDATE anexo
        SET id_tarefa_anexo = $1, nome_anexo = $2, formato_anexo = $3, tamanho_anexo = $4,
            data_carregamento_anexo = $5, caminho_arquivo_anexo = $6
        WHERE id_anexo = $7`;

      await client.query(updateAnexoQuery, [
        this.id_tarefa_anexo,
        this.nome_anexo,
        this.formato_anexo,
        this.tamanho_anexo,
        this.data_carregamento_anexo,
        this.caminho_arquivo_anexo,
        this.id_anexo
      ]);

      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  validate(): string[] {
    const errorArray: string[] = [];

    if (!this.id_tarefa_anexo) {
      errorArray.push('O ID da tarefa do anexo é obrigatório.');
    }

    if (!this.nome_anexo) {
      errorArray.push('O nome do anexo é obrigatório.');
    }

    if (!this.formato_anexo) {
      errorArray.push('O formato do anexo é obrigatório.');
    }

    if (!this.tamanho_anexo || isNaN(this.tamanho_anexo)) {
      errorArray.push('O tamanho do anexo é obrigatório e deve ser um número.');
    }

    if (!this.data_carregamento_anexo || isNaN(Date.parse(this.data_carregamento_anexo.toString()))) {
      errorArray.push('A data de carregamento do anexo é obrigatória e deve estar em um formato válido.');
    }    

    if (!this.caminho_arquivo_anexo) {
      errorArray.push('O caminho do arquivo do anexo é obrigatório.');
    }

    return errorArray;
  }
}
