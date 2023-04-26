import { Request, Response } from 'express';
import { AllComments, DeleteCommet, newComment } from '../../services/mg/coments.service';
import handlerError from '../../utilities/errorHandler';


const getTodoComentario = async (req:Request, res:Response) =>{
    try {
        
        const comentarios = await AllComments(req.params.id)
        if (comentarios.length === 0) {
            handlerError(res, 404, "No hay comentarios disponbles")
            return;
        }
        res.status(200).send(comentarios)
    } catch (error:any) {
        handlerError(res, 404, error.message, error)
    }
}

const NuevoCometario = async (req:Request, res:Response) =>{
    try {
        const data = req.body
        const nuevoComentario = await newComment(data)        
        res.status(200).send(nuevoComentario)
    } catch (error:any) {
        handlerError(res, 400, "A ocurrido un error con la peticion")
    }
}
const BorrarComentario = async (req: Request, res: Response)=>{
    try {
        const borrarcomentario = await DeleteCommet(req.params.id)
        if (borrarcomentario === null) {
            handlerError(res, 404, "No se pudo borrar o encontrar el comentario")
            return;
        }
        res.status(200).send("Comentario eliminado")
    } catch (error:any) {
        handlerError(res, 500, error.message)
    }
}

export {getTodoComentario, NuevoCometario, BorrarComentario}