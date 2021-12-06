import { Request, Response } from "express";
import { FindItemByIdStatusUsecase } from "../../../usecases/item/read/FindItemByIdStatusUsecase";
import { FindItemByIdUsecase } from "../../../usecases/item/read/FindItemByIdUsecase";
import { IFindItemByIdDTO, IFindItemByIdStatusDTO } from "../../../usecases/item/read/FindItemDTO";

export class ReadItemByIdController {
    constructor(
        private findByIdUsecase: FindItemByIdUsecase,
        private findByIdStatusUsecase: FindItemByIdStatusUsecase,
        ) {}

        async execute(request: Request, response: Response): Promise<Response> {
            const { id } = request.params;
            const { status } = request.query;

            try {
                let result;
                if(!status) {
                    result = await this.findByIdUsecase.execute(<IFindItemByIdDTO>{ id: id });

                } else {
                    result = await this.findByIdStatusUsecase.execute(
                        <IFindItemByIdStatusDTO>{
                            id: id,
                            status: Number.parseInt(status.toString()),
                        });

                    }
                return response.status(200).send(result);
            } catch (error: any) {
                return response.status(400).json({
                    name: error.name,
                    message: error.message
                });
            }
        }
}