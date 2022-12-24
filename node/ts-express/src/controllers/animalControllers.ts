import {Request,response, Response} from 'express';

class AnimalController {

    public getAnimales(req: Request, res:Response){
        res.send('Obtener todos los animales')
    }

    public getAnimal(req: Request, res:Response){
        let id = req.params.id
        res.send('Obtener animal dado un id: '+id)
    }

    public newAnimal(req: Request, res:Response){
        res.send('Crear nuevo animal')
    }

    public updateAnimal(req: Request, res:Response){
        res.send('Actualizar animal')
    }

    public removeAnimal(req: Request, res:Response){
        res.send('Eliminar animal')
    }

}
export const animalController = new AnimalController();