import { UsersRepository } from "../../repositories/UsersRepository";
import { EditUserEmailController } from "./EditUserEmailController";
import { EditUserEmailUseCase } from "./EditUserEmailUseCase";


const usersRepository = UsersRepository.getInstance()

const editUserEmailUseCase = new EditUserEmailUseCase(usersRepository) 

const editUserEmailController = new EditUserEmailController(editUserEmailUseCase)

export { editUserEmailController }