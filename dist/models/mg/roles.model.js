"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RolesSchema = new mongoose_1.Schema({
    codigo: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    permisos: {
        type: [],
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
});
const RolMOdel = (0, mongoose_1.model)("Roles", RolesSchema);
exports.default = RolMOdel;
