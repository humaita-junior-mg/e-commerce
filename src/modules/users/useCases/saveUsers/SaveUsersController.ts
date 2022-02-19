import { SaveUsersUseCase } from "./SaveUsersUseCase";
import { Request, Response } from "express"


export class SaveUsersController{

    constructor(private saveUsersUseCase: SaveUsersUseCase){}


    handle(request: Request, response: Response): Response{

        const { name, email, password } = request.body;

        try {

            this.saveUsersUseCase.execute({name, email, password})

            return response.status(201).json({message: "User Created"})
            
        } catch (error) {
            
            return response.status(400).json({error: error.message})

        }
        
    }

}