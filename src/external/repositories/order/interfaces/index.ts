import { Order, OrderResponse } from "../../../../entities/order";
import { IOrderException } from "../../../../usecases/order/errors";

export interface IOrderRepository{
    findById(orderId: string, companyId: string): Promise<IOrderException | OrderResponse >
    save(order: Order) : Promise<IOrderException | void >
}