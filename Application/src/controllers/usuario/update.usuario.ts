import { pool } from "../../imports";

export const updateUsuario = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const descricaoUsuario = req.body;
        const cpf_usuario = req.params.cpf_usuario;
        
        if( descricaoUsuario.oab_usuario == null && descricaoUsuario.senha_hash_usuario == null){
            client.query("UPDATE usuario SET nome_usuario = $1 , status_usuario = $2 , telefone_usuario = $3 , id_perfil_usuario = $4 WHERE cpf_usuario = $5", [descricaoUsuario.nome_usuario, descricaoUsuario.status_usuario, descricaoUsuario.telefone_usuario, descricaoUsuario.id_perfil_usuario,  cpf_usuario], (queryError, result) => {
            release();

            if (queryError) {
                return res.status(500).json({ error: 'Erro ao executar a consulta' });
            }

            res.json(result.rows);
            });
        }else if (descricaoUsuario.senha_hash_usuario == null){
            client.query("UPDATE usuario SET nome_usuario = $1 , status_usuario = $2, telefone_usuario = $3, oab_usuario = $4, id_perfil_usuario = $5 WHERE cpf_usuario = $6", [descricaoUsuario.nome_usuario, descricaoUsuario.status_usuario, descricaoUsuario.telefone_usuario, descricaoUsuario.oab_usuario, descricaoUsuario.id_perfil_usuario,  cpf_usuario], (queryError, result) => {
                release();
    
                if (queryError) {
                    return res.status(500).json({ error: 'Erro ao executar a consulta' });
                }
    
                res.json(result.rows);
                });
        }else if (descricaoUsuario.oab_usuario != null){
            client.query("UPDATE usuario SET nome_usuario = $1 , status_usuario = $2 , telefone_usuario = $3, senha_hash_usuario = $4, id_perfil_usuario = $5 WHERE cpf_usuario = $6", [descricaoUsuario.nome_usuario, descricaoUsuario.status_usuario, descricaoUsuario.telefone_usuario, descricaoUsuario.senha_hash_usuario, descricaoUsuario.id_perfil_usuario,  cpf_usuario], (queryError, result) => {
                release();
    
                if (queryError) {
                    return res.status(500).json({ error: 'Erro ao executar a consulta' });
                }
    
                res.json(result.rows);
                });
        }
        else{
            client.query("UPDATE usuario SET nome_usuario = $1 , status_usuario = $2 , telefone_usuario = $3 , oab_usuario = $4 , senha_hash_usuario = $5, id_perfil_usuario = $6 WHERE cpf_usuario = $7", [descricaoUsuario.nome_usuario, descricaoUsuario.status_usuario, descricaoUsuario.telefone_usuario, descricaoUsuario.oab_usuario, descricaoUsuario.senha_hash_usuario, descricaoUsuario.id_perfil_usuario,  cpf_usuario], (queryError, result) => {
                release();
    
                if (queryError) {
                    return res.status(500).json({ error: 'Erro ao executar a consulta' });
                }
    
                res.json(result.rows);
                });
            }
    });
}
