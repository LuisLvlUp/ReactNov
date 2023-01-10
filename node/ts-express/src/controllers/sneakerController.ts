import {Request, Response} from 'express';
import { zapatos } from '../data/sneakers';
import { Sneaker } from '../models/sneaker';

class SneakerController {

    private sneakeres : Sneaker[];

    constructor(){
        this.sneakeres = zapatos
    }

    public getSneakers = (req: Request, res:Response) => {
        res.json(this.sneakeres)
    }

    public getSneaker = (req: Request, res:Response) => {
        let id = req.params.id
        let response = this.sneakeres.filter((sneaker : Sneaker) => String(sneaker.id) === id)
        res.json(response)
    }

    public newSneaker = (req: Request, res:Response) => {
        let sneaker : Sneaker = {
            id: this.sneakeres.length > 0 ? this.sneakeres[this.sneakeres.length - 1].id + 1 : 1,
            marca: req.body.marca,
            silueta: req.body.silueta,
            imagen: req.body.imagen,
            precio: req.body.precio
        }
    
        this.sneakeres.push(sneaker)
        res.json( sneaker )
    }

    public updateSneaker = (req: Request, res:Response) => {
        let id = req.params.id
        let tmpSneaker : any = {}
    
        for(let sneaker of this.sneakeres){
            if(String(sneaker.id) === id){
                sneaker.silueta = req.body.silueta
                sneaker.marca = req.body.marca
                sneaker.precio = req.body.precio
                sneaker.imagen = req.body.imagen
                tmpSneaker = sneaker
            }
        }
    
        if(Object.keys(tmpSneaker).length > 0){
            res.status(200).json(tmpSneaker)
        }else{
            res.status(404).send('Sneaker not found, error 404')
        }
    }

    public removeSneaker = (req: Request, res:Response) => {
        let sneakeresTmp : Sneaker[] = this.sneakeres.filter((sneaker : Sneaker) => req.params.id !== String(sneaker.id))
    
        if(sneakeresTmp.length == this.sneakeres.length){
            res.status(404).json({result: "Sneaker not found"})
        }else{
            this.sneakeres = sneakeresTmp
            res.status(200).json({result: 1})
        } 
    }

}

const sneakerController = new SneakerController();
export default sneakerController;