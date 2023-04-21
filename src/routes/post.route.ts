import { Router, Request, Response } from "express";
import { GetTodoPost,GetUnPost,NuevoPost,ModificarPost,BorrarPost } from "../controllers/post.controller";
import Posts from "../models/post.model";



const router = Router();

router.get('/post', GetTodoPost); //--> depende del controtrolador postController
router.get('/post/:id', GetUnPost);
router.post('/post/new', NuevoPost);
router.put('/post/update/:id', ModificarPost)
router.delete('/post/del/:id',BorrarPost)

export default router