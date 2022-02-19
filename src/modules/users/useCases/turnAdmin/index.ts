import { UsersRepository } from "../../repositories/UsersRepository";
import { TurnAdminController } from "./TurnAdminController";
import { TurnAdminUseCase } from "./TurnAdminUseCase";



const usersRepository = UsersRepository.getInstance()

const turnAdminUseCase = new TurnAdminUseCase(usersRepository)

const turnAdminController = new TurnAdminController(turnAdminUseCase)

export { turnAdminController }