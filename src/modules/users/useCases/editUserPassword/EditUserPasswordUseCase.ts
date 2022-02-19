import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IRequest{
    id: string;
    password: string;
}

export class EditUserPasswordUseCase{

    constructor(private usersRepository: UsersRepository){}

    execute({id, password}: IRequest): User{

        const searchUser = this.usersRepository.findUserById(id)

        return this.usersRepository.editPassword(searchUser, password)
        
    }

}