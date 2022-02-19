import { app } from "./routes/index"


app.listen(process.env.PORT, ()=>{
    console.log("Server Running...")
})