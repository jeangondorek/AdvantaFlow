import { pool } from "../../imports";

export const updatePerfil = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const descricaoPerfil = req.body;
        const id_perfil = req.params.id_perfil;
        
        client.query("UPDATE perfil SET descricao_perfil = $1, permissoes_perfil = $2, permissoes_opcional_perfil = $3 WHERE id_perfil = $4", [descricaoPerfil.descricao_perfil, descricaoPerfil.permissoes_perfil, descricaoPerfil.permissoes_opcional_perfil , id_perfil], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}
