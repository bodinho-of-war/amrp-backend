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
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
const DbMoviesFactory_1 = __importDefault(require("./database/factory/DbMoviesFactory"));
const app = (0, express_1.default)();
const PORT = config_1.default.port;
const DB = DbMoviesFactory_1.default.create();
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield DB.getMovies();
    res.send(movies);
}));
app.get('*', (req, res) => res.sendStatus(404));
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DB.connect();
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
}));
