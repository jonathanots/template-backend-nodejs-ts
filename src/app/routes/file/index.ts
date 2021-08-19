import { Request, Response, Router } from "express";
import { fileController } from "../../../usecases/file";

export const fileRouter = Router();
fileRouter.post('/', (request: Request, response: Response) => {
    return fileController.saveImage(request, response);
});