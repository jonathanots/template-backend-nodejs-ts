import { Request, Response, Router } from "express";


export const routes = Router();

routes.get('/status', (request: Request, response: Response) => {
    response.status(200).json({
        data: 'Server is up.'
    });
})