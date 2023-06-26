import { pool } from "../../imports";

export const getbyidProcesso = async (req: any,res: any) => {
    pool.connect((error, client, release) => {
        if (error) {
        return res.status(500).json({ error: 'Erro ao obter conexão do banco de dados' });
        }

        const id_processo = req.params.id_processo;

        client.query('SELECT * FROM processo where id_processo = $1', [id_processo], (queryError, result) => {
        release();

        if (queryError) {
            return res.status(500).json({ error: 'Erro ao executar a consulta' });
        }

        res.json(result.rows);
        });
    });
}