import { User } from "../model/User";

export interface ICreateUserDTO{
    name: string;
    email: string;
    password: string;
}

export interface IUserRepository{
    
    
    save({name, email, password}: ICreateUserDTO): void;
    findUserById(id: string): User;
    editUser(usertoedit: User, password: string, email: string): User;
    turnAdmin(userturnadmin: User): User;
    list(): User[];

}