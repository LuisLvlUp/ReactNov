import { Router } from 'express';//definir un enrutador
import sneakerController from '../controllers/sneakerController';

class SneakerRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', sneakerController.getSneakers);    
        this.router.get('/:id', sneakerController.getSneaker);     
        this.router.post('/', sneakerController.newSneaker); 
        this.router.put('/:id', sneakerController.updateSneaker); 
        this.router.delete('/:id', sneakerController.removeSneaker); 
    }
}

const sneakerRoutes = new SneakerRoutes();
export default sneakerRoutes.router;