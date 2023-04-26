"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerError = (res, code, mensaje, rawError) => {
    res.status(code);
    res.send({
        message: mensaje,
        code: code,
        error: rawError
    });
};
exports.default = handlerError;
