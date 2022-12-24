import { Router } from 'express';//definir un enrutador
import { apiController } from '../controllers/apiControllers';

class ApiRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //ruta inicial
        this.router.get('/', apiController.index);        
    }
}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;