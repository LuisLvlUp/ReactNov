"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.send(`API en <a href='${fullUrl}api'>${fullUrl}api</a>`);
    }
    hola(req, res) {
        res.send('Hola');
    }
}
exports.indexController = new IndexController();
