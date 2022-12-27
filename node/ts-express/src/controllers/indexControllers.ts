import {Request,response, Response} from 'express';

class IndexController {

    public index(req: Request, res:Response){
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.send(`API en <a href='${fullUrl}api'>${fullUrl}api</a>`)
    }

    public hola(req: Request, res:Response){
        res.send('Hola') 
    }
    
}
export const indexController = new IndexController();