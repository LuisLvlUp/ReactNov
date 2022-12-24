"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const apiControllers_1 = require("../controllers/apiControllers");
class ApiRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //ruta inicial
        this.router.get('/', apiControllers_1.apiController.index);
    }
}
const apiRoutes = new ApiRoutes();
exports.default = apiRoutes.router;
