import { UsersRepository } from "../../repositories/UsersRepository";
import { SaveUsersController } from "./SaveUsersController";
import { SaveUsersUseCase } from "./SaveUsersUseCase";


const usersRepository = UsersRepository.getInstance()

const saveUsersUseCase = new SaveUsersUseCase(usersRepository)

const saveUsersController = new SaveUsersController(saveUsersUseCase)

export { saveUsersController }