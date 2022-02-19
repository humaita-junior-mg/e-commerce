import { EditUserEmailUseCase } from "./EditUserEmailUseCase";
import { Request, Response } from "express"

export class EditUserEmailController{

    constructor(private editUserEmailUseCase: EditUserEmailUseCase){}

    handle(request: Request, response: Response): Response{

        const { id } = request.headers;
        const { email } = request.body;

        const userEdited = this.editUserEmailUseCase.execute({ id: id as string, email })

        return response.status(200).json(userEdited)
    }

}