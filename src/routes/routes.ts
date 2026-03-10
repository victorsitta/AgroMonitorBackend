import { Router } from "express";
import leituraRoutes from "./routes_leitura.js"; 
import userRoutes from "./routes_users.js"; 

const router = Router();

// Aqui definimos os prefixos
router.use("/dados", leituraRoutes); // O que for leitura vai para /dados
router.use("/user", userRoutes);     // O que for usuário vai para /user

export default router;