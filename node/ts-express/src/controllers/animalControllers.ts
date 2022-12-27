import {Request,response, Response} from 'express';
import { Animal } from '../models/animal';

class AnimalController {

    private animales : Animal[];

    constructor(){
        this.animales = []
    }

    public getAnimales = (req: Request, res:Response) => {
        res.json(this.animales)
    }

    public getAnimal = (req: Request, res:Response) => {
        let id = req.params.id
        let response = this.animales.filter((animal : Animal) => String(animal.id) === id)
        res.json(response)
    }

    public newAnimal = (req: Request, res:Response) => {
        console.log(req.body)
        let animal : Animal = {
            id: this.animales.length > 0 ? this.animales[this.animales.length - 1].id + 1 : 1,
            nombre: req.body.nombre,
            tipo: req.body.tipo
        }
    
        this.animales.push(animal)
        res.json( animal )
    }

    public updateAnimal = (req: Request, res:Response) => {
        let id = req.params.id
        let tmpAnimal : any = {}
    
        for(let animal of this.animales){
            if(String(animal.id) === id){
                animal.nombre = req.body.nombre
                animal.tipo = req.body.tipo
                tmpAnimal = animal
            }
        }
    
        if(Object.keys(tmpAnimal).length > 0){
            res.status(200).json(tmpAnimal)
        }else{
            res.status(404).send('Animal not found, error 404')
        }
    }

    public removeAnimal = (req: Request, res:Response) => {
        let animalesTmp : Animal[] = this.animales.filter((animal : Animal) => req.params.id !== String(animal.id))
    
        if(animalesTmp.length == this.animales.length){
            res.status(404).json({result: "Animal not found"})
        }else{
            this.animales = animalesTmp
            res.status(200).json({result: 1})
        } 
    }

}

// export default const animalController = new AnimalController();
const animalController = new AnimalController();
export default animalController;