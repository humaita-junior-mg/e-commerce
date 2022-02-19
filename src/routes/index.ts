import express from "express"
import { router as userRouter } from "./userRouter"
import { router as loginRouter } from "./loginRouter"
import { config } from "dotenv"

config()


const app = express()


app.use(express.json())

app.use("/user", userRouter)

app.use("/login", loginRouter)


export { app }