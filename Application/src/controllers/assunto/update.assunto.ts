import { pool } from "../../imports";
import { validateData } from "../../middleware/validate.middleware";
import { Assunto } from "../../models/assunto.model";

export const updateAssunto = async (req: any,res: any) => {
    validateData(Assunto)(req, res, async () => {
        const assunto = req.body;
        const id_assunto = req.params.id_assunto;

        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM assunto WHERE id_assunto = $1";
            const selectResult = await client.query(selectQuery, [req.params.id_assunto]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi atualizado.');
            }

            const updateAssuntoQuery = `
                UPDATE assunto 
                SET descricao_assunto = $1
                WHERE id_assunto = $2
                RETURNING id_assunto`;

            const result = await client.query(updateAssuntoQuery, [
                assunto.descricao_assunto,
                id_assunto
            ]);

            const updatedAssuntoId = result.rows[0].id_assunto;

            await client.query('COMMIT');

            res.json({ message: 'Atualizado corretamente', id_assunto: updatedAssuntoId });
        } catch (error) {
            await client.query('ROLLBACK');
            res.status(500).json({ error: 'Erro ao executar a consulta' });
        } finally {
            client.release();
        }
    });
}
