import { Request, Response } from "express";
import { ICreateOrderProductDTO } from "../../usecases/order/create-order/CreateOrderDTO";
import { CreateOrderUsecase } from "../../usecases/order/create-order/CreateOrderUsecase";

export class OrderController {

    constructor(
        private createOrderUsecase: CreateOrderUsecase
    ) {}

    async createOrder(request: Request, response: Response): Promise<Response>{
        const { companyId, orderId, paymentId, customerId, description, methodOrderId, statusId, products} = request.body; 

        try {
            await this.createOrderUsecase.execute({
                order_id: orderId,
                company_id: companyId,
                payment_id: paymentId,
                customer_id: customerId,
                description: description,
                method_order_id: methodOrderId,
                status_id: statusId,
                products: Array(products).map<ICreateOrderProductDTO>((item: { id: any; catalogId: any; }) => { 
                    return {id: item.id, catalog_id: item.catalogId} } ) 
            });

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                name: error.name,
                message: error.message
            });
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
