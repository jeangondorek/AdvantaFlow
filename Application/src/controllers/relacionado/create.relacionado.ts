import { pool } from "../../imports";

export const createRelacionado = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const relacionado = req.body;

        client.query("INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ($1, $2)", [relacionado.cpf_usuario_relacionado, relacionado.id_tarefa_relacionado ], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}