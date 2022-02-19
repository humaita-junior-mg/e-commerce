import { TurnAdminUseCase } from "./TurnAdminUseCase";
import { Request, Response } from "express"


export class TurnAdminController{

    constructor(private turnAdminUseCase: TurnAdminUseCase){}

    handle(request: Request, response: Response): Response{

        const { id } = request.params;

        const newAdmin = this.turnAdminUseCase.execute(id)

        return response.status(200).json(newAdmin)
    }

}