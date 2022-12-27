"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnimalController {
    constructor() {
        this.getAnimales = (req, res) => {
            res.json(this.animales);
        };
        this.getAnimal = (req, res) => {
            let id = req.params.id;
            let response = this.animales.filter((animal) => String(animal.id) === id);
            res.json(response);
        };
        this.newAnimal = (req, res) => {
            console.log(req.body);
            let animal = {
                id: this.animales.length > 0 ? this.animales[this.animales.length - 1].id + 1 : 1,
                nombre: req.body.nombre,
                tipo: req.body.tipo
            };
            this.animales.push(animal);
            res.json(animal);
        };
        this.updateAnimal = (req, res) => {
            let id = req.params.id;
            let tmpAnimal = {};
            for (let animal of this.animales) {
                if (String(animal.id) === id) {
                    animal.nombre = req.body.nombre;
                    animal.tipo = req.body.tipo;
                    tmpAnimal = animal;
                }
            }
            if (Object.keys(tmpAnimal).length > 0) {
                res.status(200).json(tmpAnimal);
            }
            else {
                res.status(404).send('Animal not found, error 404');
            }
        };
        this.removeAnimal = (req, res) => {
            let animalesTmp = this.animales.filter((animal) => req.params.id !== String(animal.id));
            if (animalesTmp.length == this.animales.length) {
                res.status(404).json({ result: "Animal not found" });
            }
            else {
                this.animales = animalesTmp;
                res.status(200).json({ result: 1 });
            }
        };
        this.animales = [];
    }
}
// export default const animalController = new AnimalController();
const animalController = new AnimalController();
exports.default = animalController;
