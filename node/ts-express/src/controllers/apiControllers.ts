import {Request,response, Response} from 'express';

class ApiController {

    public index(req: Request, res:Response){
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.send(`Animales en : <a href='${ fullUrl }/animales'>${ fullUrl }/animales</a>`)
    }

}
export const apiController = new ApiController();
