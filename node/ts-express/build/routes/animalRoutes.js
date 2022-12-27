"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const animalControllers_1 = __importDefault(require("../controllers/animalControllers"));
class AnimalRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', animalControllers_1.default.getAnimales);
        this.router.get('/:id', animalControllers_1.default.getAnimal);
        this.router.post('/', animalControllers_1.default.newAnimal);
        this.router.put('/:id', animalControllers_1.default.updateAnimal);
        this.router.delete('/:id', animalControllers_1.default.removeAnimal);
    }
}
const animalRoutes = new AnimalRoutes();
exports.default = animalRoutes.router;
