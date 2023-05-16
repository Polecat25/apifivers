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
exports.VerificarRol = void 0;
const users_model_1 = __importDefault(require("../models/mg/users.model"));
const errorHandler_1 = __importDefault(require("../utilities/errorHandler"));
const jwt_handler_1 = require("../utilities/jwt.handler");
const VerificarRol = (roles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        //verificar jwt
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ').pop();
        const IsValidToken = yield (0, jwt_handler_1.jwtVerify)(token);
        const userData = yield users_model_1.default.findById(IsValidToken._id);
        if (!userData) {
            (0, errorHandler_1.default)(res, 401, "INVALID_USER OR CREDENTIALS");
            return;
        }
        //VERIFICAR EL ROLL 
        const owo = roles.includes(userData === null || userData === void 0 ? void 0 : userData.role);
        if (!owo) {
            (0, errorHandler_1.default)(res, 401, "FORBBIDEN_PASS INVALID ROL");
            return;
        }
        next();
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 500, "internal_error");
    }
});
exports.VerificarRol = VerificarRol;
