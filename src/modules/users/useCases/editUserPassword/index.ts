import { UsersRepository } from "../../repositories/UsersRepository";
import { EditUserPasswordController } from "./EditUserPasswordController";
import { EditUserPasswordUseCase } from "./EditUserPasswordUseCase";


const usersRepository = UsersRepository.getInstance()

const editUserPasswordUseCase = new EditUserPasswordUseCase(usersRepository)

const editUserPasswordController = new EditUserPasswordController(editUserPasswordUseCase)

export { editUserPasswordController }