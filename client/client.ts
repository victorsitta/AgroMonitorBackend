import axios from 'axios';
import type { Leitura } from '../src/types/graos/processarLeitura_interface.js'



const URL = "http://localhost:3000/dados";

// Função para gerar números aleatórios (Equivalente ao random.uniform)
const gerarValorAleatorio = (min: number, max: number): number => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

const gerarDados = (): Leitura => {
  return {
    SOJA: gerarValorAleatorio(20, 35),
    FEIJAO: gerarValorAleatorio(25, 40),
    MILHO: gerarValorAleatorio(15, 30),
    TRIGO: gerarValorAleatorio(30, 50)
  };
};

const enviarDados = async () => {
  const dados = gerarDados();

  try {
    // No axios, o segundo parâmetro já é o corpo do JSON
    const resposta = await axios.post(URL, dados);

    console.log("Enviado:", dados);
    console.log("Status:", resposta.status);
    console.log("Resposta:", resposta.data);
    console.log("-".repeat(40));

  } catch (error: any) {
    console.error("Erro ao enviar:", error.message);
  }
};


//------------------------------------------------------users-------------------//
const URLUser = "http://localhost:3000/dados/users";

const enviarDadosUsers = async () => {
  const dados = {
    email: 'joaositta28@gmail.com',
    password: '12345678',
  }

  try {
    // No axios, o segundo parâmetro já é o corpo do JSON
    const resposta = await axios.post(URLUser, dados);

    console.log("Enviado:", dados.email, dados.password);
    console.log("Status:", resposta.status);
    console.log("Resposta:", resposta.data);
    console.log("-".repeat(40));

  } catch (error: any) {
    console.error("Erro ao enviar usuário: ", error.message);
  }
};

  
// Loop infinito (Equivalente ao while True com time.sleep)
console.log("Iniciando simulador de envio...");
setInterval(enviarDados, 5000); // 5000ms = 5 segundos
enviarDadosUsers();