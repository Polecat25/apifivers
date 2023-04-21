"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const router = (0, express_1.Router)();
router.get('/post', post_controller_1.GetTodoPost); //--> depende del controtrolador postController
router.get('/post/:id', post_controller_1.GetUnPost);
router.post('/post/new', post_controller_1.NuevoPost);
router.put('/post/update/:id', post_controller_1.ModificarPost);
router.delete('/post/del/:id', post_controller_1.BorrarPost);
exports.default = router;
