import { Request, Response } from "express";
import { FindAllItemUsecase } from "../../../usecases/item/read/FindAllUsecase";
import { FindItemByStatusUsecase } from "../../../usecases/item/read/FindItemByStatusUsecase";
import { IFindItemByStatusDTO } from "../../../usecases/item/read/FindItemDTO";

export class ReadItemController {
    constructor(
        private findAllUsecase: FindAllItemUsecase,
        private findByStatusUsecase: FindItemByStatusUsecase,
        ) {}

        async execute(request: Request, response: Response): Promise<Response> {
            const { status, offset, limit } = request.query;
            try {
                let result;
                if(!status) {
                    result = await this.findAllUsecase.execute(<IFindItemByStatusDTO>{
                        limit: !limit ? 100 : Number.parseInt(limit.toString()),
                        offset: !offset ? 1 : Number.parseInt(offset.toString())
                    });

                } else {
                    result = await this.findByStatusUsecase.execute(
                        <IFindItemByStatusDTO>{
                            status: Number.parseInt(status.toString()),
                            limit: !limit ? 100 : Number.parseInt(limit.toString()),
                            offset: !offset ? 1 : Number.parseInt(offset.toString())
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