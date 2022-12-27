import { Router } from 'express';//definir un enrutador
import animalController from '../controllers/animalControllers';

class AnimalRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', animalController.getAnimales);    
        this.router.get('/:id', animalController.getAnimal);     
        this.router.post('/', animalController.newAnimal); 
        this.router.put('/:id', animalController.updateAnimal); 
        this.router.delete('/:id', animalController.removeAnimal); 
    }
}

const animalRoutes = new AnimalRoutes();
export default animalRoutes.router;