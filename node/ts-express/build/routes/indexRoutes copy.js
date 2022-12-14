"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //ruta inicial
        this.router.get('/', indexControllers_1.indexController.index);
        this.router.get('/hola', indexControllers_1.indexController.hola);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
