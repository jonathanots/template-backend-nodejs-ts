import { IRouter, Request, Response, Router } from "express";

export const serverRouter = Router();

serverRouter.get('/status', (request: Request, response: Response) => {
    response.status(200).json({
        data: 'Server is up.'
    });
});
