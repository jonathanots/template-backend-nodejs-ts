import { Order } from '../../../entities/order';
import { IOrderRepository } from '../../../external/repositories/order/interfaces';
import { ICreateOrderDTO } from './CreateOrderDTO';

export class CreateOrderUsecase {

    constructor(
        private repository:IOrderRepository
    ) {}

    async execute(data: ICreateOrderDTO) {
        const order = new Order(data);

        await this.repository.save(order);
    }
}