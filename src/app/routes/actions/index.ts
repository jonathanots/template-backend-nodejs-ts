import { Request, Response, Router } from "express";
import { actionController } from "../../../usecases/actions";

export const actionRouter = Router();

actionRouter.post('/', (request: Request, response: Response) => {
    return actionController.createAction(request, response);
});