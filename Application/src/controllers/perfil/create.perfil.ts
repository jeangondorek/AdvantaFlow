import { pool } from "../../imports";

export const createPerfil = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const descricaoPerfil = req.body;
        
        if( descricaoPerfil.permissoes_opcional_perfil != null){
            client.query("INSERT INTO perfil (descricao_perfil, permissoes_perfil, permissoes_opcional_perfil) VALUES ($1, $2, $3)", [descricaoPerfil.descricao_perfil, descricaoPerfil.permissoes_perfil, descricaoPerfil.permissoes_opcional_perfil], (queryError, result) => {
            release();

            if (queryError) {
                return res.status(500).json({ error: 'Erro ao executar a consulta' });
            }

            res.json(result.rows);
            });}
        else{
            client.query("INSERT INTO perfil (descricao_perfil, permissoes_perfil) VALUES ($1, $2)", [descricaoPerfil.descricao_perfil, descricaoPerfil.permissoes_perfil], (queryError, result) => {
            release();

            if (queryError) {
                return res.status(500).json({ error: 'Erro ao executar a consulta' });
            }

            res.json(result.rows);
            });
        }
    });
}