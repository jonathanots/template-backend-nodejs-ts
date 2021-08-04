import { Order, OrderResponse } from "../../../../entities/order";
import { CreateOrderInvalidData } from "../../../../usecases/order/create-order/CreateOrderErrors";
import { IOrderException } from "../../../../usecases/order/errors";
import { MongoDBService } from "../../../databases/mongo";
import { IOrderRepository } from "../interfaces";

export class OrderRepository implements IOrderRepository{

    private datasource:MongoDBService;

    constructor(datasource: MongoDBService) {
        this.datasource = datasource;
    }

    async findById (orderId: string, companyId: string): Promise<IOrderException | OrderResponse> {

        try {

            const db = await this.datasource.connect();

            if(!db)
                throw Error('Some erro was occurred with database connection');
            
            const data = await db.collection('orders').findOne(
                {
                    orderId: orderId,
                    companyId: companyId
                }
            );

            if(data)
                return new OrderResponse({
                    id: '1',
                    company_id: '1',
                    description: '',
                    customer_id: null,
                    payment_id: '1',
                    method_order_id: '1',
                    status_id: '1'
                });
            
            throw Error("No object was found.");
        }  catch (error) {
            if (error instanceof CreateOrderInvalidData) {
                return new CreateOrderInvalidData('Create Order Invalid Data');
            } else {
                // return new Error('Some error was ocurred with database manager')
                return error;
            }
        } finally {
            await this.datasource.disconnect();
        }
    }
    async save (order: Order): Promise<IOrderException | void> {
        try {
            
            const found = await this.findById(order.order_id, order.company_id);
            
            if(found instanceof OrderResponse)
                throw new Error("Data already exists on database.");
            
            const db = await this.datasource.connect();

            if(!db)
                throw Error('Some error was occurred with database connection');
            
            const result = await db.collection('orders').insertOne(order);

            if(!result)
                throw Error('Some error was occurred when tried insert data.');
        } catch (error) {
            return error;
        } finally {
            await this.datasource.disconnect();
        }
    }

}