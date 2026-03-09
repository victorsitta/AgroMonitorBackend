import express from "express";
import routes from "./routes/routes.js";

const app = express();

// middleware
app.use(express.json());

// rotas
app.use(routes);

export default app;