import { NextFunction, Request, Response } from "express"
import UserMOdel from "../models/mg/users.model"
import handlerError from "../utilities/errorHandler"
import {jwtVerify} from "../utilities/jwt.handler"
const VerificarRol = (roles:string[]) => async (req: Request, res: Response, next: NextFunction) =>{
    
        try {
            //verificar jwt
        const token = req.headers.authorization?.split(' ').pop()        
        const IsValidToken = await jwtVerify(token)        
        const userData = await UserMOdel.findById(IsValidToken._id)      

        if (!userData) {
            handlerError(res, 401, "INVALID_USER OR CREDENTIALS")   
            return; 
        }
        //VERIFICAR EL ROLL 
        const owo  = roles.includes(<string>userData?.role)
        if (!owo) {
            handlerError(res, 401, "FORBBIDEN_PASS INVALID ROL")   
            return; 
        }    
        next();
        } catch (error) {
            handlerError(res, 500, "internal_error")    
        }
    
}

export {VerificarRol}
