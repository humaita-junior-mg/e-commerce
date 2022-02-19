
import { EditUserPasswordUseCase } from "./EditUserPasswordUseCase";
import { Request, Response } from "express"

export class EditUserPasswordController{

    constructor(private editUserPasswordUseCase: EditUserPasswordUseCase){}

    handle(request: Request, response: Response): Response{

        const { id } = request.headers;
        const { password } = request.body;

        const userEdited = this.editUserPasswordUseCase.execute({ id: id as string, password })

        return response.status(200).json(userEdited)
    }

}