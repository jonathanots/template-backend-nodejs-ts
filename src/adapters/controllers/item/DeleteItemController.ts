import { Request, Response } from "express";
import { DeleteItemUsecase } from "../../../usecases/item/delete/DeleteItemUsecase";

export class DeleteItemController {
    constructor (private usecase: DeleteItemUsecase) {}

    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            
            const result = await this.usecase.execute({ id: id}); 

            return response.status(200).send(result);
        } catch (error: any) {
            return response.status(400).json({
                name: error.name,
                message: error.message
            });
        }
    }
}