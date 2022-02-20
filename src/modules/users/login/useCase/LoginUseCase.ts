
import { UsersRepository } from "../../repositories/UsersRepository"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

interface IRequest{
    email: string;
    password: string;
}

export class LoginUseCase{

    constructor(private usersRepository: UsersRepository){}

    execute({email, password}: IRequest): string{

        const listUsers = this.usersRepository.list()

        const accountToLogin = listUsers.find(user => user.email === email)

        if(!accountToLogin){
            throw new Error("Email or password is incorrect")
        }

        const userVerify = bcrypt.compareSync(password, accountToLogin.password)  

        if(userVerify === false){
            throw new Error("Email or password is incorrect")
        }

        const token = jwt.sign({id: accountToLogin.id, admin: accountToLogin.admin}, process.env.SECRET_TOKEN)

        return token
    }

}