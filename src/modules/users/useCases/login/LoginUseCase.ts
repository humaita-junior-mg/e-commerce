import { UsersRepository } from "../../repositories/UsersRepository";
import jwt from "jsonwebtoken"

interface IRequest{
    email: string;
    password: string;
}

export class LoginUseCase{

    constructor(private usersRepository: UsersRepository){}

    execute({email, password}: IRequest): string{

        const accountToLogin = this.usersRepository.findUserByEmail(email)

        if(!accountToLogin){
            throw new Error("Email or password is incorrect")
        }

        const tryLog = this.usersRepository.login(accountToLogin, password)

        if(tryLog === false){
            throw new Error("Email or password is incorrect")
        }

        const token = jwt.sign({id: accountToLogin.id, admin: accountToLogin.admin}, process.env.SECRET_TOKEN)

        return token
    }

}