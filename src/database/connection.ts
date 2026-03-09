import {Pool} from 'pg' // IMPORTA O POOL DO PACOTE PG PARA GERENCIAR AS CONEXÕES COM O BANCO DE DADOS
import {Config} from '../config/config.js'


export const pool = new Pool({ // CRIA UMA NOVA INSTÂNCIA DO POOL COM AS CONFIGURAÇÕES DO BANCO DE DADOS

    host: Config.database.host,
    port: Config.database.port,
    database: Config.database.name,
    user: Config.database.user,
    password: Config.database.password 
})

pool.connect() // TENTA CONECTAR AO BANCO DE DADOS
.then( () => console.log('Conexão com o banco de dados estabelecida com sucesso!')) // SE CONEXÃO FOR BEM SUCEDIDA, EXIBE MENSAGEM DE SUCESSO
.catch( (err) => console.error('Erro ao conectar ao banco de dados:', err)) // SE HOUVER ERRO NA CONEXÃO, EXIBE MENSAGEM DE ERRO

 