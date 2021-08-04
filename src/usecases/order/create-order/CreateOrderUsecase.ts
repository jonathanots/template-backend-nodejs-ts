import { Order, OrderProduct } from '../../../entities/order';
import { IOrderRepository } from '../../../external/repositories/order/interfaces';
import { ICreateOrderDTO } from './CreateOrderDTO';

export class CreateOrderUsecase {

    constructor(
        private repository:IOrderRepository
    ) {}

    async execute(data: ICreateOrderDTO) {
        const order = new Order({
            order_id: data.order_id,
            company_id: data.company_id,
            customer_id: data.customer_id,
            description: data.description,
            method_order_id: data.method_order_id,
            payment_id: data.payment_id,
            status_id: data.status_id,
            products: data.products.map<OrderProduct>((item) => { 
                return {order_id: item.id, catalog_id: item.catalog_id} })
        });

        await this.repository.save(order);
    }
}