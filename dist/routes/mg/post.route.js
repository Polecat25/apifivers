"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../../controllers/mg/post.controller");
const routerP = (0, express_1.Router)();
routerP.get('/post', post_controller_1.GetTodoPost); //--> depende del controtrolador postController
routerP.get('/post/:id', post_controller_1.GetUnPost);
routerP.post('/post/new', post_controller_1.NuevoPost);
routerP.put('/post/update/:id', post_controller_1.ModificarPost);
routerP.delete('/post/del/:id', post_controller_1.BorrarPost);
exports.default = routerP;
