import { ListUsersUseCase } from "./ListUsersUseCase";
import { Request, Response } from "express"


export class ListUsersController{
    constructor(private listUsersUseCase: ListUsersUseCase){}

    handle(request: Request, response: Response): Response{

        const { token } = request.headers;

        const userVerify = this.listUsersUseCase.execute({token: token as string})
        
        return response.status(200).json() 
    }
}