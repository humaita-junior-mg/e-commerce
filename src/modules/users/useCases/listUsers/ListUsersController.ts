import { ListUsersUseCase } from "./ListUsersUseCase";
import { Request, Response } from "express"


export class ListUsersController{
    constructor(private listUsersUseCase: ListUsersUseCase){}

    handle(request: Request, response: Response): Response{ 

        return response.status(200).json(this.listUsersUseCase.execute()) 
    }
}