
import { NextFunction, Request, Response } from "express";
import handlerError from "../utilities/errorHandler";
import { jwtVerify } from "../utilities/jwt.handler";
import { RequestMod } from '../models/interfaces/RequestMod';

const VerificarSesion = async (req: RequestMod, res: Response, next: NextFunction)=>{
    try {
        
        
        //Obtener el jwt desde la peticion
        const jwtfromuser = req.headers.authorization 
        const jwtOnly = jwtfromuser?.split(' ').pop()
        //verificar si el jwt es valido en la sesion 
        const jwtIsOk = await jwtVerify(jwtOnly)
        if (!jwtIsOk) {
            handlerError(res, 401, 'INVALID_SESSION')
        }
        req.datauser = jwtIsOk
      
       

        
        next();
        
    } catch (error:any) {
        handlerError(res, 401, 'INVALID_SESSION')
    }
}

export {VerificarSesion}
