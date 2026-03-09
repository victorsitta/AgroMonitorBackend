
import type { Response, Request } from "express";
import { CreateUser } from "../service/users_service.js";
import type {CreateUserDTO} from "../types/users/user.interface.js";

export class UserController {

    private service = new CreateUser()

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
