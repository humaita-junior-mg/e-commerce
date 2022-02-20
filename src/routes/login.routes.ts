import { Router } from "express"
import { loginController } from "../modules/users/login/useCase"


const router = Router()


router.post("/", (request, response)=>{

    loginController.handle(request, response)

})

export { router }