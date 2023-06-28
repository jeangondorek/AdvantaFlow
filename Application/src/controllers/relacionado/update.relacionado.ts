import { pool } from "../../imports";

export const updateRelacionado = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const relacionado = req.body;
        const id_relacionado = req.params.id_relacionado;

        client.query("UPDATE relacionado SET cpf_usuario_relacionado  = $1 , id_tarefa_relacionado   = $2 WHERE id_relacionado = $3", [relacionado.cpf_usuario_relacionado , relacionado.id_tarefa_relacionado , id_relacionado], (queryError, result) => {
            release();

            if (queryError) {
                return res.status(500).json({ error: 'Erro ao executar a consulta' });
            }

            res.json(result.rows);
            });
    });
}
