import { MongoDBService } from "../../../external/databases/mongo";
import { OrderRepository } from "../../../external/repositories/order/implementations";
import { CreateOrderUsecase } from "./CreateOrderUsecase";

const datasource = new MongoDBService();

const orderRepository = new OrderRepository(datasource);

const createOrderUsecase = new CreateOrderUsecase(orderRepository);

export { createOrderUsecase };