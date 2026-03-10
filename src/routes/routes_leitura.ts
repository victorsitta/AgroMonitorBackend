import { Router } from "express";
import { LeituraController } from "../controller/leitura_controller.js";

const router = Router();
const leituraController = new LeituraController();

// A URL final será http://localhost:3000/dados
router.post("/", (req, res) => {
  leituraController.receberDados(req, res);
});

export default router;