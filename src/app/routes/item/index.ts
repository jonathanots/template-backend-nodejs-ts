import { Request, Response, Router } from "express";
import { createItemController, deleteItemController, readItemByIdController, readItemController, updateItemController } from "../../../usecases/item";

export const itemRouter = Router();

itemRouter.post('/', (request: Request, response: Response) => {
    return createItemController.execute(request, response);
});

itemRouter.get('/', (request: Request, response: Response) => {
    return readItemController.execute(request, response);
});

itemRouter.get('/:id', (request: Request, response: Response) => {
    return readItemByIdController.execute(request, response);
});

itemRouter.put('/:id', (request: Request, response: Response) => {
    return updateItemController.execute(request, response);
});

itemRouter.delete('/:id', (request: Request, response: Response) => {
    return deleteItemController.execute(request, response);
});
