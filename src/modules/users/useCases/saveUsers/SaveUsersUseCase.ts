import { UsersRepository } from "../../repositories/UsersRepository";

interface IRequest{
    name: string;
    email: string;
    password: string
}

export class SaveUsersUseCase{

    constructor(private usersRepository: UsersRepository){}

    execute({name, email, password}: IRequest): void{
        const verify = this.usersRepository.findUserByEmail(email)
        

        if(verify){
            throw new Error("Email already exists!")
        }

        this.usersRepository.save({name, email, password})
    }

}