import { pool } from '../database/connection.js';



export class leituraRepository {

    async salvarLeitura(soja: number, feijao: number, milho: number, trigo: number) {

        const query = `
            INSERT INTO readings (soja, feijao, milho, trigo, data_leitura)
            VALUES ($1, $2, $3, $4, NOW())
            RETURNING *
        `;
        const values = [soja, feijao, milho, trigo];

        try {
            console.log("\n🔌 Executando INSERT de leitura...");
            const result = await pool.query(query, values);
            console.log("Leitura salva com sucesso!");
            return result.rows[0];

        } catch (error) {
            console.error("\nErro ao salvar leitura:", error);
            throw error;
        }
    }

    async getAllReadings() {
        const result = await pool.query('SELECT * FROM readings');
        return result.rows;
    }

    async getUserReadingsId(id: number) {
        const result = await pool.query('SELECT * FROM readings WHERE id = $1', [id]);
        return result.rows[0]; // o 0 é para retornar apenas o primeiro resultado, já que o ID é único
    }

}