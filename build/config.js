"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: (process.env.NODE_ENV === 'staging') ? '.dev.env' : '.env' });
const config = {
    dbconnection: process.env.MONGODB_HOST,
    port: process.env.PORT
};
exports.default = config;
