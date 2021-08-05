import { Request, Response, Router } from "express";
import { orderController } from "../../../usecases/order";

export const orderRouter = Router();

orderRouter.post('/', (request: Request, response: Response) => {
    return orderController.createOrder(request, response);
});