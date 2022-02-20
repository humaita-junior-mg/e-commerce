import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IRequest{
    id: string;
    password: string;
    email: string;
}

export class EditUserPasswordUseCase{

    constructor(private usersRepository: UsersRepository){}

    execute({id, password, email}: IRequest): User{

        const searchUser = this.usersRepository.findUserById(id)

        return this.usersRepository.editUser(searchUser, password, email)
        
    }

}