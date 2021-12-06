import { Request, Response } from "express";
import { ICreateItemDTO } from "../../../usecases/item/create/CreateItemDTO";
import { CreateItemUsecase } from "../../../usecases/item/create/CreateItemUsecase";
import { IItemException } from "../../../usecases/item/errors";

export class CreateItemController {
    constructor(private usecase: CreateItemUsecase) { }

    async execute(request: Request, response: Response): Promise<Response> {
        const { name, tag, description, data } = request.body;
        try {
            const result = await this.usecase.execute(<ICreateItemDTO>{
                name: name,
                tag: {
                    tagCode: tag.tagCode,
                    tagType: tag.tagType,
                },
                description: description,
                data: data,
                state: 1,
                status: 1
            });

            if ((result as IItemException).statusCode !== undefined)
                throw result;

            return response.status(201).json(result);
        } catch (error: any) {
            return response.status(error.statusCode).json(error);
        }
    }
}