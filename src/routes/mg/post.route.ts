import { Router, Request, Response } from "express";
import { GetTodoPost,GetUnPost,NuevoPost,ModificarPost,BorrarPost } from "../../controllers/mg/post.controller";




const routerP = Router();

routerP.get('/post', GetTodoPost); //--> depende del controtrolador postController
routerP.get('/post/:id', GetUnPost);
routerP.post('/post/new', NuevoPost);
routerP.put('/post/update/:id', ModificarPost)
routerP.delete('/post/del/:id',BorrarPost)

export default routerP