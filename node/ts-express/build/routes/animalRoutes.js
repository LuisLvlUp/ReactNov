"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const animalControllers_1 = require("../controllers/animalControllers");
class AnimalRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', animalControllers_1.animalController.getAnimales);
        this.router.get('/:id', animalControllers_1.animalController.getAnimal);
        this.router.post('/', animalControllers_1.animalController.newAnimal);
        this.router.put('/:id', animalControllers_1.animalController.updateAnimal);
        this.router.delete('/:id', animalControllers_1.animalController.removeAnimal);
    }
}
const animalRoutes = new AnimalRoutes();
exports.default = animalRoutes.router;
