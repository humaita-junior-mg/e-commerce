import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/UsersRepository";


export class TurnAdminUseCase{

    constructor(private usersRepository: UsersRepository){}


    execute(id: string): User{

        const userToTurnAdmin = this.usersRepository.findUserById(id)

        return this.usersRepository.turnAdmin(userToTurnAdmin)
    }

}