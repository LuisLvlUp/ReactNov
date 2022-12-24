"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiController = void 0;
class ApiController {
    index(req, res) {
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.send(`Animales en : <a href='${fullUrl}/animales'>${fullUrl}/animales</a>`);
    }
}
exports.apiController = new ApiController();
