import { Request, Response } from 'express';
import { loginUser, newUser } from '../../services/mg/uth.service';
import handlerError from '../../utilities/errorHandler';
import { user, auth } from './../../models/interfaces/user.interface';

const RegistroUsuario = async (req: Request, res: Response) =>{
        try {
            const {email, pass, nombre, role}:user = req.body
            
            const data = await newUser({email, pass, nombre, role})
            res.status(data.code).send(data)
        } catch (error:any) {
            handlerError(res, 400, error.message)
        }
}

const loginUsuario = async (req: Request, res: Response)=>{
    try {
        const {email, pass}:auth = req.body
        const loginuser = await loginUser({email, pass})
        res.status(loginuser.code).send(loginuser.login)
    } catch (error:any) {
        handlerError(res, 500, error.message, error)
    }
}

export {loginUsuario, RegistroUsuario}