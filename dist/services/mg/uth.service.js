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
exports.loginUser = exports.newUser = void 0;
const users_model_1 = __importDefault(require("../../models/mg/users.model"));
const bcrypt_handler_1 = require("../../utilities/bcrypt.handler");
const jwt_handler_1 = require("../../utilities/jwt.handler");
const validators_1 = require("../../utilities/validators");
const newUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    //validar data
    const { nombre, email, pass, role } = data;
    if (!nombre.trim() || !email.trim() || !pass.trim() || !role.trim()) {
        throw new Error('data empty');
    }
    if (!(0, validators_1.GoodEmail)(email.trim())) {
        throw new Error("Correo invalido");
    }
    if (!(0, validators_1.GoodPass)(pass.trim())) {
        throw new Error('la contraseña debe tener minimo 8 caracteres, 1 Mayúscula, 1 minúscula, caracter especial ');
    }
    //validar correo existente
    const isnew = yield users_model_1.default.findOne({ email: email.trim() }); //si es null no hay correo
    if (isnew) {
        return { code: 400, message: "Usuario o Correo ya Existe" };
    }
    const passhas = yield (0, bcrypt_handler_1.EncriptarPass)(pass.trim());
    const res = yield users_model_1.default.create({ email: email.trim(), nombre: nombre.trim(), pass: passhas, role: role.trim() });
    return { code: 200, nameusr: res.nombre, message: "Usuario Creado con éxito" };
});
exports.newUser = newUser;
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const errorObjeto = { message: "Correo o contraseña incorrecta", code: 400 };
    //encontrar el usurio
    const isuser = yield users_model_1.default.findOne({ email: data.email.trim() }); //devuelve null o el objeto user
    //console.log("datos isuser:", isuser);
    if (!isuser) {
        return { code: 400, login: errorObjeto };
    }
    //validar contraseña 
    const passHash = isuser.pass;
    const matchPass = yield (0, bcrypt_handler_1.DesencriptarPass)(passHash, data.pass); //devuleve true o false
    if (!matchPass) {
        return { code: 400, login: errorObjeto };
    }
    //## JWT <<<<------
    const { _id, email, nombre, role } = isuser;
    const jwt = yield (0, jwt_handler_1.jwtGenerator)({ _id, email, role });
    return { code: 200, login: { _id, email, nombre, role, jwt } };
});
exports.loginUser = loginUser;
