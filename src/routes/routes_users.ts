import { Router } from "express";
import { UserController } from "../controller/user_controller.js";

const router = Router();
const userController = new UserController();

// rota que recebe os dados do client.ts
router.post("/dados/user", (req, res) => {
  userController.receberDados(req, res);
});

export default router;