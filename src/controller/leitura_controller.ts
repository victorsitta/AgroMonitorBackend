
import type { Response, Request } from "express";
import { ProcessarLeitura } from "../service/leitura_service.js";

export class LeituraController {

    private service = new ProcessarLeitura()

    async receberDados(req: Request, res: Response) {

        try {
            const dados = req.body;

            await this.service.executar(dados)
            return res.status(200).json({ status: "ok", message: "Leitura processada" });

        } catch (error: any) {
            return res.status(400).json({
                erro: error.message || "Erro interno no servidor!"
            })
        }
    }

}