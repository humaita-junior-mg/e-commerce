import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IRequest{
    email: string;
    id: string;

}

export class EditUserEmailUseCase{

    constructor(private usersRepository: UsersRepository){}

    execute({id, email}: IRequest): User{

        const searchUser = this.usersRepository.findUserById(id)

        return this.usersRepository.editEmail(searchUser, email)
    }
}