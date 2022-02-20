import { Router } from "express"
import { editUserPasswordController } from "../modules/users/useCases/editUser"
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

router.put("/account", (request, response)=>{
    editUserPasswordController.handle(request, response)
})

router.patch("/admin/:id", (request, response)=>{
    turnAdminController.handle(request, response)
})

export { router }