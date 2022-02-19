import { User } from "../model/User";

export interface ICreateUserDTO{
    name: string;
    email: string;
    password: string;
}

export interface IUserRepository{
    
    
    save({name, email, password}: ICreateUserDTO): void;
    findUserById(id: string): User;
    findUserByEmail(email: string): User;
    editEmail(usertoedit: User, email: string): User;
    editPassword(usertoedit: User, password: string): User;
    list(): User[];

}