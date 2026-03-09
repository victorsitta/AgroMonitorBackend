
import { userRepository } from '../repository/users_repository.js';

export class CreateUser {

    private repo = new userRepository()


    public async executar(dados: any): Promise<void>{
        console.log("\n📥 NOVA LEITURA DE USUÁRIO RECEBIDA");


        console.log(`Salvando usuário: ${dados}`);
        await this.repo.createUser(dados);

    }

}