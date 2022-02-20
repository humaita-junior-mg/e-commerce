import express from "express"
import { router as userRouter } from "./user.routes"
import { router as loginRouter } from "./login.routes"
import { config } from "dotenv"
import swaggerUi from "swagger-ui-express"

import swaggerFile from "../../swagger.json"

config()


const app = express()


app.use(express.json())


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use("/user", userRouter)

app.use("/login", loginRouter)


export { app }