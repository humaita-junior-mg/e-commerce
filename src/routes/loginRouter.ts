import { Router } from "express"
import { loginController } from "../modules/users/useCases/login"

const router = Router()


router.post("/", (request, response)=>{

    loginController.handle(request, response)

})

export { router }