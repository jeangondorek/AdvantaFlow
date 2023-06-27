import { pool } from "../../imports";

export const updateExecucao = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const execucao = req.body;
        const id_execucao = req.params.id_execucao;

        client.query("UPDATE execucao SET cpf_usuario_execucao = $1 , id_processo_execucao  = $2 WHERE id_execucao = $3", [execucao.cpf_usuario_execucao, execucao.id_processo_execucao, id_execucao], (queryError, result) => {
            release();

            if (queryError) {
                return res.status(500).json({ error: 'Erro ao executar a consulta' });
            }

            res.json(result.rows);
            });
    });
}
