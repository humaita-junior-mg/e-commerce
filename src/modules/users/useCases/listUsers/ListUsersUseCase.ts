import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/UsersRepository";

export class ListUsersUseCase{

    constructor(private usersRepository: UsersRepository){}

    execute(): User[]{

        

        return this.usersRepository.list()
    }

}