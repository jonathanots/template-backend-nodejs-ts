import { Request, Response } from "express";
import { CreateActionUsecase } from "../../usecases/actions/create-actions/CreateActionUsecase";

export class ActionController{

    constructor(
        private createActionUsecase: CreateActionUsecase
    ) {}

    async createAction(request: Request, response: Response): Promise<Response>{
        const { companyId, employeeId, api, method, before, now } = request.body; 
        try {
            await this.createActionUsecase.execute({
                company_id: companyId,
                employee_id: employeeId,
                api: api,
                method: {
                    name: method.name,
                    alias: method.alias
                },
                before: before,
                now: now
            });

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                name: error.name,
                message: error.message
            });
        }
    }

    async createActionSocket(data: any): Promise<Boolean>{
        const { companyId, employeeId, api, method, before, now } = data; 
        try {
            await this.createActionUsecase.execute({
                company_id: companyId,
                employee_id: employeeId,
                api: api,
                method: {
                    name: method.name,
                    alias: method.alias
                },
                before: before,
                now: now
            });

            return true;
        } catch (error) {
            return false;
        }
    }

    // async findById(request: Request, response: Response): Promise<Response> {
    //     const { orderId, companyId } = request.body;

    //     try {
            
    //         await 

    //     } catch (error) {
    //         return response.status(400).json({
    //             name: error.name,
    //             message: error.message
    //         });
    //     }
    // }
}