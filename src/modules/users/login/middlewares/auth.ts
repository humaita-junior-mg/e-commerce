import { Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"

export const auth = (request: Request, response: Response, next: NextFunction)=>{
    const { authorization_token } = request.headers;

    if(!authorization_token){
        return response.status(400).json({error: "Access Denied"})
    }

    try {

        const verify = jwt.verify(authorization_token, process.env.SECRET_TOKEN)

        request.user = verify

        next()
        
    } catch (error) {
        
        return response.status(400).json({error: error.message})

    }

    
}