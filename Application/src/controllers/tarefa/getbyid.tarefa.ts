import { pool } from "../../imports";

export const getbyidTarefa = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const id_tarefa = req.params.id_tarefa;

        client.query('SELECT * FROM tarefa where id_tarefa = $1', [id_tarefa], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}