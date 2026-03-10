import { Router } from "express";
import { UserController } from "../controller/user_controller.js";

const router = Router();
const userController = new UserController();

// A URL final será http://localhost:3000/user
router.post("/", (req, res) => {
  userController.receberDados(req, res);
});

export default router;