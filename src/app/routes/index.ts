import { Request, Response, Router } from "express";
import { orderController } from "../../usecases/order";

export const routes = Router();

routes.get('/status', (request: Request, response: Response) => {
    response.status(200).json({
        data: 'Server is up.'
    });
});

routes.post('/order', (request: Request, response: Response) => {
    return orderController.createOrder(request, response);
});

// routes.get('/order', (request: Request, response: Response) => {
//     return orderController.createOrder(request, response);
// });
