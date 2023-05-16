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
exports.DeleteRol = exports.UpdateRol = exports.CreateRol = exports.GetOnerol = exports.GetAllroles = void 0;
const roles_model_1 = __importDefault(require("../../models/mg/roles.model"));
const GetAllroles = () => __awaiter(void 0, void 0, void 0, function* () {
    const getRoles = yield roles_model_1.default.find({});
    return getRoles;
});
exports.GetAllroles = GetAllroles;
//RUTA VALIDA CON AUTORIZACION 
const GetOnerol = (rol) => __awaiter(void 0, void 0, void 0, function* () {
    const getRol = yield roles_model_1.default.findOne({ codigo: rol });
    return getRol;
});
exports.GetOnerol = GetOnerol;
const CreateRol = (dataRol) => __awaiter(void 0, void 0, void 0, function* () {
    //const {codigo, descripcion, permisos } = dataRol
    const DatatoRol = {
        codigo: dataRol.codigo.trim().toUpperCase(),
        descripcion: dataRol.descripcion.trim().toUpperCase(),
        permisos: dataRol.permisos.map(permiso => permiso.toUpperCase().trim())
    };
    const newrol = yield roles_model_1.default.create(DatatoRol);
    return newrol;
});
exports.CreateRol = CreateRol;
const UpdateRol = (id, dataRol) => __awaiter(void 0, void 0, void 0, function* () {
    const DatatoRol = {
        codigo: dataRol.codigo.trim().toUpperCase(),
        descripcion: dataRol.descripcion.trim().toUpperCase(),
        permisos: dataRol.permisos.map(permiso => permiso.toUpperCase().trim())
    };
    const UpdateRol = yield roles_model_1.default.findOneAndUpdate({ _id: id }, DatatoRol, { new: true });
    return UpdateRol;
});
exports.UpdateRol = UpdateRol;
const DeleteRol = (idRol) => __awaiter(void 0, void 0, void 0, function* () {
    const Delrol = yield roles_model_1.default.findOneAndRemove({ _id: idRol });
    return Delrol;
});
exports.DeleteRol = DeleteRol;
