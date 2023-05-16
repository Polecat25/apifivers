"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Permissions = new mongoose_1.Schema({
    CODE: {
        type: String,
        required: true,
        unique: true
    },
    DESCRIP: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
});
const PermissionMOdel = (0, mongoose_1.model)("permissions", Permissions);
exports.default = PermissionMOdel;
