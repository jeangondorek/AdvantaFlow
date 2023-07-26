import { pool } from "../../imports";
import { Anexo } from "../../models/anexo.model";
import { validateData } from "../../middleware/validate.middleware";

export const updateAnexo = async (req: any, res: any) => {
    validateData(Anexo)(req, res, async () => {
        const anexo = req.body;
        const id_anexo = req.params.id_anexo;

        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            const selectQuery = "SELECT * FROM anexo WHERE id_anexo = $1";
            const selectResult = await client.query(selectQuery, [req.params.id_anexo]);

            if (selectResult.rows.length < 1) {
                return res.json('Registro não encontrado. Nada foi atualizado.');
            }

            const updateAnexoQuery = `
                UPDATE anexo 
                SET nome_anexo = $1, 
                    formato_anexo = $2, 
                    tamanho_anexo = $3, 
                    data_carregamento_anexo = $4, 
                    caminho_arquivo_anexo = $5, 
                    id_tarefa_anexo = $6
                WHERE id_anexo = $7
                RETURNING id_anexo`;

            const result = await client.query(updateAnexoQuery, [
                anexo.nome_anexo,
                anexo.formato_anexo,
                anexo.tamanho_anexo,
                anexo.data_carregamento_anexo,
                anexo.caminho_arquivo_anexo,
                anexo.id_tarefa_anexo,
                id_anexo
            ]);

            const updatedAnexoId = result.rows[0].id_anexo;

            await client.query('COMMIT');

            res.json({ message: 'Atualizado corretamente', id_anexo: updatedAnexoId });
        } catch (error) {
            await client.query('ROLLBACK');
            res.status(500).json({ error: 'Erro ao executar a consulta' });
        } finally {
            client.release();
        }
    });
};
