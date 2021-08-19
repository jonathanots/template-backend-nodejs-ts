import { Request, Response } from "express";
import { SaveFileUsecase } from "../../usecases/file/save-file/SaveFileUsecase";

export class FileController {

    constructor(
        private saveFileUsecase: SaveFileUsecase
    ){ }
    
    async saveImage(request: Request, response: Response): Promise<Response | void>{
        try {
            
            await this.saveFileUsecase.execute(request, response);

            // return response.status(201).json(result);
        } catch (error) {

            return response.status(400).json({
                name: error.name,
                message: error.message
            });
        }
    }
}