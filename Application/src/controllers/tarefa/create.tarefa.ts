import { pool } from "../../imports";

export const createTarefa = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const tarefa = req.body;

        client.query("INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ($1, $2, $3, $4)", [tarefa.funcao_tarefa, tarefa.detalhes_tarefa , tarefa.data_criacao_tarefa , tarefa.id_processo_tarefa], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}