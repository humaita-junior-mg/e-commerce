import { response, Router } from "express"
import { editUserEmailController } from "../modules/users/useCases/editUserEmail"
import { editUserPasswordController } from "../modules/users/useCases/editUserPassword"
import { listUsersController } from "../modules/users/useCases/listUsers"
import { saveUsersController } from "../modules/users/useCases/saveUsers"
import { turnAdminController } from "../modules/users/useCases/turnAdmin"

const router = Router()

router.post("/", (request, response)=>{
    saveUsersController.handle(request, response)
})

router.get("/", (request, response)=>{
    listUsersController.handle(request, response)
})

router.patch("/email", (request, response)=>{
    editUserEmailController.handle(request, response)
})

router.patch("/password", (request, response)=>{
    editUserPasswordController.handle(request, response)
})

router.patch("/admin/:id", (request, response)=>{
    turnAdminController.handle(request, response)
})

export { router }