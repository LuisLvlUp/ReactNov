"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalController = void 0;
class AnimalController {
    getAnimales(req, res) {
        res.send('Obtener todos los animales');
    }
    getAnimal(req, res) {
        let id = req.params.id;
        res.send('Obtener animal dado un id: ' + id);
    }
    newAnimal(req, res) {
        res.send('Crear nuevo animal');
    }
    updateAnimal(req, res) {
        res.send('Actualizar animal');
    }
    removeAnimal(req, res) {
        res.send('Eliminar animal');
    }
}
exports.animalController = new AnimalController();
