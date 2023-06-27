import { pool } from "../../imports";

export const createExecucao = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const execucao = req.body;

        client.query("INSERT INTO execucao (cpf_usuario_execucao, id_processo_execucao) VALUES ($1, $2)", [execucao.cpf_usuario_execucao, execucao.id_processo_execucao], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}