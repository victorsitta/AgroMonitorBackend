import { Router } from "express";
import { LeituraController } from "../controller/leitura_controller.js";

const router = Router();
const leituraController = new LeituraController();

// rota que recebe os dados do client.ts
router.post("/dados", (req, res) => {
  leituraController.receberDados(req, res);
});

export default router;

