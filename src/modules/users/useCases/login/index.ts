import { UsersRepository } from "../../repositories/UsersRepository";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";


const usersRepository = UsersRepository.getInstance()

const loginUseCase = new LoginUseCase(usersRepository)

const loginController = new LoginController(loginUseCase) 

export { loginController }