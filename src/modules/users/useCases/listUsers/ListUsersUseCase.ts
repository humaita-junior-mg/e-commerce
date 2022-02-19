import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/UsersRepository";
import jwt from "jsonwebtoken"

interface IRequest{
    token: string;
}

export class ListUsersUseCase{

    constructor(private usersRepository: UsersRepository){}

    execute({token}: IRequest): User[]{

        const userInToken = jwt.verify(token, process.env.SECRET_TOKEN)

        if(!userInToken){
            throw new Error("Access Denied, is not logged")
        }

        if(userInToken)

        return this.usersRepository.list()
    }

}