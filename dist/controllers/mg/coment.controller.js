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
exports.BorrarComentario = exports.NuevoCometario = exports.getTodoComentario = void 0;
const coments_service_1 = require("../../services/mg/coments.service");
const errorHandler_1 = __importDefault(require("../../utilities/errorHandler"));
const getTodoComentario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comentarios = yield (0, coments_service_1.AllComments)(req.params.id);
        if (comentarios.length === 0) {
            (0, errorHandler_1.default)(res, 404, "No hay comentarios disponbles");
            return;
        }
        res.status(200).send(comentarios);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 404, error.message, error);
    }
});
exports.getTodoComentario = getTodoComentario;
const NuevoCometario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const nuevoComentario = yield (0, coments_service_1.newComment)(data);
        res.status(200).send(nuevoComentario);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 400, "A ocurrido un error con la peticion");
    }
});
exports.NuevoCometario = NuevoCometario;
const BorrarComentario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrarcomentario = yield (0, coments_service_1.DeleteCommet)(req.params.id);
        if (borrarcomentario === null) {
            (0, errorHandler_1.default)(res, 404, "No se pudo borrar o encontrar el comentario");
            return;
        }
        res.status(200).send("Comentario eliminado");
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 500, error.message);
    }
});
exports.BorrarComentario = BorrarComentario;
