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
exports.VerificarSesion = void 0;
const errorHandler_1 = __importDefault(require("../utilities/errorHandler"));
const jwt_handler_1 = require("../utilities/jwt.handler");
const VerificarSesion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Obtener el jwt desde la peticion
        const jwtfromuser = req.headers.authorization;
        const jwtOnly = jwtfromuser === null || jwtfromuser === void 0 ? void 0 : jwtfromuser.split(' ').pop();
        //verificar si el jwt es valido en la sesion 
        const jwtIsOk = yield (0, jwt_handler_1.jwtVerify)(jwtOnly);
        if (!jwtIsOk) {
            (0, errorHandler_1.default)(res, 401, 'INVALID_SESSION');
        }
        req.datauser = jwtIsOk;
        next();
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 401, 'INVALID_SESSION');
    }
});
exports.VerificarSesion = VerificarSesion;
