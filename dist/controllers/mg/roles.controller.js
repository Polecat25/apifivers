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
exports.BorrarRol = exports.ModificarRol = exports.CrearRol = exports.GetUnRol = exports.GetTodoRol = void 0;
const role_service_1 = require("../../services/mg/role.service");
const errorHandler_1 = __importDefault(require("../../utilities/errorHandler"));
const GetTodoRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataRoles = yield (0, role_service_1.GetAllroles)();
        if (dataRoles.length === 0) {
            (0, errorHandler_1.default)(res, 404, 'No hay registros');
            return;
        }
        res.status(200).send(dataRoles);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 404, 'No encontrado', error.message);
    }
});
exports.GetTodoRol = GetTodoRol;
const GetUnRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo } = req.params;
        const dataRol = yield (0, role_service_1.GetOnerol)(codigo);
        if (dataRol === null) {
            (0, errorHandler_1.default)(res, 404, 'Rol invalido');
            return;
        }
        res.status(200).send(dataRol);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 404, 'No encontrado', error.message);
    }
});
exports.GetUnRol = GetUnRol;
const CrearRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { descripcion, codigo, permisos } = req.body;
        const nuevorol = yield (0, role_service_1.CreateRol)({ descripcion, codigo, permisos });
        res.status(200).send(nuevorol);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 404, 'No se pudo crear el rol');
    }
});
exports.CrearRol = CrearRol;
const ModificarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isRol = yield (0, role_service_1.UpdateRol)(req.params.id, req.body);
        if (isRol === null) {
            (0, errorHandler_1.default)(res, 400, 'No encontrado o no  se pudo actualizar');
            return;
        }
        res.status(200).send(isRol);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 400, 'No encontrado o no  se pudo actualizar', error.message);
    }
});
exports.ModificarRol = ModificarRol;
const BorrarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eliminarRol = yield (0, role_service_1.DeleteRol)(req.params.id);
        if (eliminarRol === null) {
            (0, errorHandler_1.default)(res, 400, 'No encontrado o no se pudo eliminar');
            return;
        }
        res.status(200).send('Rol Eliminado');
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 404, 'No encontrado o no se pudo eliminar', error.message);
    }
});
exports.BorrarRol = BorrarRol;
