import express from "express";
import router from "./routes/routes.js"; // Importa o centralizador

const app = express();
app.use(express.json());

// Monta todas as rotas a partir da raiz, pois os prefixos já estão no router
app.use(router); 

export default app;