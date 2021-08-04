import { OrderController } from "../../adapters/controllers/OrderController";
import { createOrderUsecase } from "./create-order";

const orderController = new OrderController(createOrderUsecase);

export { orderController };