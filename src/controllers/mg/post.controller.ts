import { Request, Response } from 'express';
import Posts from '../../models/post.model';
import { GetAllPost, GetOnePost, NewPost, UpdatePost, DeletePost } from '../../services/mg/post.service';
import handlerError from '../../utilities/errorHandler';


const GetTodoPost = async (req: Request, res: Response)=>{
    try {
        const all =  await GetAllPost()  
       if (all.length ===0) {
        handlerError(res, 404, "No hay registros")
        return;
       }
        res.status(200).send(all)
    } catch (error:any) {
               
        handlerError(res, 404, "No hay registros", error.message)
    }
    //res.send("hola desde el controlador")
}
const GetUnPost = async (req: Request, res: Response)=>{
    try {        
        const registro = await GetOnePost(req.params.id)
        if (registro === null) {
            handlerError(res, 400, "No se encuentra registro") 
            return;
        }
        res.status(200).send(registro)

    } catch (error:any) {
        handlerError(res, 404, "No se encuentra registro")    
    }
}
const NuevoPost = async (req: Request, res: Response)=>{
   try { 
    const {body} = req
    const nuevoPost = await NewPost(body)
   res.status(200).send(nuevoPost)
   } catch (error:any) {
    handlerError(res, 500, "No se pudo hacer el registro", error.message)
   }
}
const ModificarPost = async (req: Request, res: Response)=>{
  try { 
    
    const {body} = req
    const toModify = await UpdatePost(req.params.id, body)
    if (toModify === null) {
        handlerError(res, 400, "No se pudo actualizar o no se pudo encontrar el Post")  
        return; //<--- necesario si vas a validar si hay datos o no  
    }
    res.status(200).send(toModify)
  } catch (error:any) {
    handlerError(res, 500, "No se pudo actualizar o no se pudo encontrar el Post", error.message)
  }
}
const BorrarPost = async (req: Request, res: Response)=>{
    try {        
       
        const deletion = await DeletePost(req.params.id)
        if (deletion === null) {
            //res.status(200).send( "Post borrado" )
            handlerError(res, 404, "No se pudo borrar o no se pudo encontrar el Post") 
            return;   
        }
      
        res.status(200).send( "Post borrado" )
        
        
        //console.log('chake', deletion);
        
    } catch (error:any) {
        handlerError(res, 404, "No se pudo borrar o no se pudo encontrar el Post", error.message)
    }
}

export {GetTodoPost,GetUnPost,NuevoPost,ModificarPost,BorrarPost}
