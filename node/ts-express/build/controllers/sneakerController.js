"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sneakers_1 = require("../data/sneakers");
class SneakerController {
    constructor() {
        this.getSneakers = (req, res) => {
            res.json(this.sneakeres);
        };
        this.getSneaker = (req, res) => {
            let id = req.params.id;
            let response = this.sneakeres.filter((sneaker) => String(sneaker.id) === id);
            res.json(response);
        };
        this.newSneaker = (req, res) => {
            let sneaker = {
                id: this.sneakeres.length > 0 ? this.sneakeres[this.sneakeres.length - 1].id + 1 : 1,
                marca: req.body.marca,
                silueta: req.body.silueta,
                imagen: req.body.imagen,
                precio: req.body.precio
            };
            this.sneakeres.push(sneaker);
            res.json(sneaker);
        };
        this.updateSneaker = (req, res) => {
            let id = req.params.id;
            let tmpSneaker = {};
            for (let sneaker of this.sneakeres) {
                if (String(sneaker.id) === id) {
                    sneaker.silueta = req.body.silueta;
                    sneaker.marca = req.body.marca;
                    sneaker.precio = req.body.precio;
                    sneaker.imagen = req.body.imagen;
                    tmpSneaker = sneaker;
                }
            }
            if (Object.keys(tmpSneaker).length > 0) {
                res.status(200).json(tmpSneaker);
            }
            else {
                res.status(404).send('Sneaker not found, error 404');
            }
        };
        this.removeSneaker = (req, res) => {
            let sneakeresTmp = this.sneakeres.filter((sneaker) => req.params.id !== String(sneaker.id));
            if (sneakeresTmp.length == this.sneakeres.length) {
                res.status(404).json({ result: "Sneaker not found" });
            }
            else {
                this.sneakeres = sneakeresTmp;
                res.status(200).json({ result: 1 });
            }
        };
        this.sneakeres = sneakers_1.zapatos;
    }
}
const sneakerController = new SneakerController();
exports.default = sneakerController;
