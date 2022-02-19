import { LoginUseCase } from "./LoginUseCase";
import { Request, Response } from "express"

export class LoginController{

    constructor(private loginUseCase: LoginUseCase){}

    handle(request: Request, response: Response): Response{
        const { email, password } = request.body;

        try {

            const token = this.loginUseCase.execute({email, password})

            response.header("authorizarion-token", token)

            return response.status(200).json({message: "User Logged"})

        } catch (error) {
            
            return response.status(400).json({error: error.message})

        }
        
    }

}