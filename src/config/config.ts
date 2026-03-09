import dotenv from 'dotenv';

dotenv.config(); //Serve para carregar o arquivo .env dentro do node!

interface Appconfig {

    //Banco de Dados
    database: {
        host: string;
        port: number;
        name: string;
        user: string;
        password: string;
    };

    //Servidor
    server: {
        host: string
        port: number;
        debug: boolean;
    }

}

export const Config: Appconfig= { //CRIA OBJETO DE CONFIGURAÇÃO PARA O PROJETO, COM AS VARIÁVEIS DE AMBIENTE
    
    database:{   //OBJETO DE CONFIGURAÇÃO DO BANCO DE DADOS
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 5432,
        name: process.env.DB_NAME || 'agromonitor',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || '351497'

    },

    server: {    //OBJETO DE CONFIGURAÇÃO DO SERVIDOR
        host: process.env.HOST || '0.0.0.0',
        port: Number(process.env.PORT) || 3000,
        debug: process.env.DEBUG === 'true'
    }
}

