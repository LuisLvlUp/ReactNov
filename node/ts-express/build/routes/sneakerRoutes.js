"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const sneakerController_1 = __importDefault(require("../controllers/sneakerController"));
class SneakerRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', sneakerController_1.default.getSneakers);
        this.router.get('/:id', sneakerController_1.default.getSneaker);
        this.router.post('/', sneakerController_1.default.newSneaker);
        this.router.put('/:id', sneakerController_1.default.updateSneaker);
        this.router.delete('/:id', sneakerController_1.default.removeSneaker);
    }
}
const sneakerRoutes = new SneakerRoutes();
exports.default = sneakerRoutes.router;
