import { pool } from "../../imports";

export const getbycpfUsuario = async (req: any,res: any) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM usuario where cpf_usuario = $1',  [req.params.cpf_usuario]);
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