import { Router, Request, Response } from "express";
import { GetTodoPost,GetUnPost,NuevoPost,ModificarPost,BorrarPost } from "../../controllers/mg/post.controller";
import { VerificarSesion } from "../../middlewares/auth.middleware";
import { VerificarRol } from "../../middlewares/role.middleware";




const routerP = Router();

routerP.get('/post', GetTodoPost); //--> depende del controtrolador postController
routerP.get('/post/:id', GetUnPost); //--> sirve para ir a los comentarios, es el id PERO DEL POST 
routerP.post('/post/new', NuevoPost);
routerP.put('/post/update/:id', VerificarSesion, VerificarRol(['USER', 'ADMIN']), ModificarPost) //--> necesita verificacion para editar el post
routerP.delete('/post/del/:id',VerificarSesion, VerificarRol(['USER', 'ADMIN']), BorrarPost)

export default routerP