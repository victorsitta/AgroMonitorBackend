import app from "./app.js";
import { Config } from "./config/config.js";

const PORT = Config.server.port;
const HOST = Config.server.host;

app.listen(PORT, HOST, () => {

  console.log("\n=========================================");
  console.log("🚀 SERVIDOR AGROMONITOR ATIVO");
  console.log(`📍 URL: http://${HOST}:${PORT}/dados`);
  console.log(`📊 Modo Debug: ${Config.server.debug}`);
  console.log("=========================================\n");

});