import { pool } from "../../imports";

export const updateAnexo = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const anexo = req.body;
        const cpf_usuario = req.params.cpf_usuario;

        client.query("UPDATE anexo SET nome_anexo = $1 , status_usuario = $2 , telefone_usuario = $3 , oab_usuario = $4 , senha_hash_usuario = $5, id_perfil_usuario = $6 WHERE cpf_usuario = $7", [anexo.nome_usuario, anexo.status_usuario, anexo.telefone_usuario, anexo.oab_usuario, anexo.senha_hash_usuario, anexo.id_perfil_usuario,  cpf_usuario], (queryError, result) => {
            release();

            if (queryError) {
                return res.status(500).json({ error: 'Erro ao executar a consulta' });
            }

            res.json(result.rows);
            });
    });
}
