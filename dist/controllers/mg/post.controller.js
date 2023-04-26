"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrarPost = exports.ModificarPost = exports.NuevoPost = exports.GetUnPost = exports.GetTodoPost = void 0;
const post_service_1 = require("../../services/mg/post.service");
const errorHandler_1 = __importDefault(require("../../utilities/errorHandler"));
const GetTodoPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all = yield (0, post_service_1.GetAllPost)();
        if (all.length === 0) {
            (0, errorHandler_1.default)(res, 404, "No hay registros");
            return;
        }
        res.status(200).send(all);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 404, "No hay registros", error.message);
    }
    //res.send("hola desde el controlador")
});
exports.GetTodoPost = GetTodoPost;
const GetUnPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registro = yield (0, post_service_1.GetOnePost)(req.params.id);
        if (registro === null) {
            (0, errorHandler_1.default)(res, 400, "No se encuentra registro");
            return;
        }
        res.status(200).send(registro);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 404, "No se encuentra registro");
    }
});
exports.GetUnPost = GetUnPost;
const NuevoPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const nuevoPost = yield (0, post_service_1.NewPost)(body);
        res.status(200).send(nuevoPost);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 500, "No se pudo hacer el registro", error.message);
    }
});
exports.NuevoPost = NuevoPost;
const ModificarPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const toModify = yield (0, post_service_1.UpdatePost)(req.params.id, body);
        if (toModify === null) {
            (0, errorHandler_1.default)(res, 400, "No se pudo actualizar o no se pudo encontrar el Post");
            return; //<--- necesario si vas a validar si hay datos o no  
        }
        res.status(200).send(toModify);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 500, "No se pudo actualizar o no se pudo encontrar el Post", error.message);
    }
});
exports.ModificarPost = ModificarPost;
const BorrarPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletion = yield (0, post_service_1.DeletePost)(req.params.id);
        if (deletion === null) {
            //res.status(200).send( "Post borrado" )
            (0, errorHandler_1.default)(res, 404, "No se pudo borrar o no se pudo encontrar el Post");
            return;
        }
        res.status(200).send("Post borrado");
        //console.log('chake', deletion);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 404, "No se pudo borrar o no se pudo encontrar el Post", error.message);
    }
});
exports.BorrarPost = BorrarPost;
