import { User } from "../model/User";
import { ICreateUserDTO, IUserRepository } from "./IUsersRepository";
import bcrypt from "bcryptjs"


export class UsersRepository implements IUserRepository{

    private users: User[];

    private static INSTANCE: UsersRepository;

    private constructor(){
        this.users = [];
    }

    public static getInstance(){
        if(!UsersRepository.INSTANCE){
            UsersRepository.INSTANCE = new UsersRepository()
        }

        return UsersRepository.INSTANCE
    }

    save({ name, email, password }: ICreateUserDTO): void {
        
       const newuser = new User(name, email, password, new Date(), new Date())

       this.users.push(newuser)
    }

    findUserById(id: string): User {
        
        return this.users.find(user => user.id === id)

    }

    editUser(usertoedit: User, password: string, email: string): User {

        if(!password){
            Object.assign(usertoedit, {
                email,
                updated_at: new Date()
            })
    
            return usertoedit
        }

        if(!email){
            Object.assign(usertoedit, {
                password: bcrypt.hashSync(password, 10),
                updated_at: new Date()
            })
    
            return usertoedit
        }

        Object.assign(usertoedit, {
            email: email,
            password: bcrypt.hashSync(password, 10),
            updated_at: new Date()
        })

        return usertoedit
    }

    list(): User[] {

        return this.users

    }

    turnAdmin(userturnadmin: User): User{

        Object.assign(userturnadmin, {
            admin:true,
            updated_at: new Date()
        })

        return userturnadmin
    }
}