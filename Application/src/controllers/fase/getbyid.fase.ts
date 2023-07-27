import { pool } from "../../imports";

export const getbyidFase = async (req: any,res: any) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM fase where id_fase = $1',  [req.params.id_fase]);
        client.release();

        const select_result = result.rows;

        if (select_result.length < 1) {
            return res.json('Não existem dados para serem exibidos.');
        } else {
            return res.json(select_result);
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
}