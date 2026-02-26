# IoT Sensor Monitor
## ESP32 + Python Backend + Banco de Dados + Dashboard Web
________________________________________
### **1. Visão Geral**
Este projeto implementa uma arquitetura completa de monitoramento IoT, integrando hardware embarcado, backend em Python, banco de dados e uma interface web para visualização de dados.
O sistema coleta dados físicos por meio de sensores conectados a um ESP32, envia essas informações para um servidor backend desenvolvido em Python, armazena os registros em banco de dados e disponibiliza os dados organizados em uma aplicação web.
O objetivo é demonstrar, de forma prática, a integração entre dispositivos físicos e aplicações web modernas, seguindo uma arquitetura organizada e escalável.

________________________________________

### **2. Arquitetura do Sistema**
- A arquitetura segue o seguinte fluxo:

ESP32 --> Envio de dados via Wi-Fi (HTTP / JSON) --> Backend em Python (API REST) --> Banco de Dados --> Aplicação Web (Dashboard)

________________________________________

### **Responsabilidade de cada camada**
**ESP32**
- Coleta dados dos sensores
- Estrutura as informações em formato JSON
- Envia requisições HTTP ao backend

**Backend (Python)**
- Recebe dados do dispositivo
- Realiza validação das informações
- Armazena registros no banco de dados
- Disponibiliza endpoints para consulta

**Banco de Dados**
- Armazena histórico de leituras
- Permite consultas por período
- Organiza dados para futuras análises

**Frontend Web**
- Consome a API do backend
- Exibe dados em tempo real
- Mostra status do sistema
- Apresenta histórico de medições

________________________________________

### **3. Problema Abordado**
Sistemas que realizam apenas leitura local de sensores apresentam limitações como:
- Ausência de histórico persistente
- Falta de monitoramento remoto
- Dados brutos sem validação
- Dificuldade de análise comparativa
Este projeto resolve essas limitações ao implementar:
- Centralização de dados
- Persistência estruturada
- Separação de responsabilidades
- Visualização organizada
________________________________________

### **4. Tecnologias Utilizadas**
Hardware
- ESP32
- Sensores ambientais (exemplo: temperatura e umidade)
Backend
- Python
- Framework para API REST (exemplo: Flask ou FastAPI)
Banco de Dados
- Banco relacional ou não relacional
- Estrutura para armazenamento de leituras
Frontend
- React
- TypeScript
- TailwindCSS
________________________________________

### **5. Funcionalidades Implementadas**
- Coleta automática de dados via ESP32
- Envio periódico para o backend
- Armazenamento em banco de dados
- Consulta de histórico de medições
- Exibição em dashboard web
- Indicadores de status do sistema
- Estrutura preparada para expansão
________________________________________

### **6. Estrutura do Projeto**
/esp32
Código responsável pela leitura dos sensores e envio via Wi-Fi
/backend
API desenvolvida em Python
Endpoints para recebimento e consulta de dados
/database
Configuração e estrutura do banco
/web
Aplicação frontend responsável pela visualização
README.md
________________________________________

### **7. Conceitos Aplicados**
- Arquitetura em camadas
- Separação de responsabilidades
- Comunicação HTTP entre dispositivo e servidor
- Estruturação de API REST
- Persistência de dados
- Integração entre hardware e software
- Organização de projeto escalável
________________________________________

### **8. Possíveis Evoluções**
- Implementação de autenticação JWT
- Sistema de alertas automáticos
- Dashboard com gráficos analíticos
- Controle de múltiplos dispositivos
- Deploy em ambiente de nuvem
-	Monitoramento em tempo real via WebSocket
________________________________________

### **9. Aplicabilidade**
A arquitetura proposta pode ser aplicada em:
- Monitoramento agrícola
- Controle ambiental
- Automação residencial
- Monitoramento industrial
- Projetos acadêmicos
________________________________________

### **10. Conclusão**
Este projeto demonstra a implementação de um sistema IoT completo, integrando:
- Dispositivo embarcado
- Backend em Python
- Banco de dados
- Interface web moderna

## **A arquitetura adotada segue princípios de organização e escalabilidade, permitindo expansão futura e aplicação em cenários reais.**
