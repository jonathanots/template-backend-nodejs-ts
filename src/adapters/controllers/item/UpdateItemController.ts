import { Request, Response } from "express";
import { UpdateItemUsecase } from "../../../usecases/item/update/UpdateItemUsecase";

export class UpdateItemController {
    constructor (private usecase: UpdateItemUsecase) {}

    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const data = request.body;
            
            if (!data)
                throw new Error('You need to pass some data before update an Item');
            
            const result = await this.usecase.execute({ id: id, ...data }); 

            return response.status(200).send(result);
        } catch (error: any) {
            return response.status(400).json({
                name: error.name,
                message: error.message
            });
        }
    }
}