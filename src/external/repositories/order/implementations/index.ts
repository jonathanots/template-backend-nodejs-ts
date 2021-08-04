import { Order, OrderResponse } from "../../../../entities/order";
import { CreateOrderAlreadyExistsException } from "../../../../usecases/order/create-order/CreateOrderErrors";
import { IOrderException } from "../../../../usecases/order/errors";
import { DatabaseService } from "../../../databases";
import { IOrderRepository } from "../interfaces";

export class OrderRepository implements IOrderRepository{

    private datasource:DatabaseService;

    constructor(datasource: DatabaseService) {
        this.datasource = datasource;
    }

    async findById (orderId: string, companyId: string): Promise<IOrderException | OrderResponse> {

        try {

            const db = await this.datasource.connect();

            if(!db)
                throw Error('Some error was occurred with database connection');
            
            const data = await db.collection('orders').findOne(
                {
                    order_id: orderId,
                    company_id: companyId
                }, { }
            );

            if(data)
                return new OrderResponse(data);
            
            throw Error("No object was found.");
        }  catch (error) {
            return error;
        } finally {
            await this.datasource.disconnect();
        }
    }
    async save (order: Order): Promise<IOrderException | void> {
        try {
            
            const found = await this.findById(order.order_id, order.company_id);
            
            if(found instanceof OrderResponse)
                throw new CreateOrderAlreadyExistsException("Data already exists on database.");
            
            const db = await this.datasource.connect();

            if(!db)
                throw Error('Some error was occurred with database connection');
            
            const result = await db.collection('orders').insertOne(order);

            if(!result)
                throw Error('Some error was occurred when tried insert data.');
        } catch (error) {
            throw error;
        } finally {
            await this.datasource.disconnect();
        }
    }

}