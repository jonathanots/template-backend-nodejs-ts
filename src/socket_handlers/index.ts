import { Socket } from "socket.io";
import { actionController } from "../usecases/actions";
import { orderController } from "../usecases/order";

const msg = async (socket:Socket, data:any) => {
    console.log("socket", socket.id);
    console.log("data", data);

    socket.emit('fromMsg', data);
}

const createActionSocket = async (socket: Socket, data: any) => {
  const result = await actionController.createActionSocket(data);

  if(result)
    socket.emit('createdAction', data);
}

const createOrderSocket = async (socket: Socket, data: any) => {
  const result = await orderController.createOrderSocket(data);

  if(result)
    socket.emit('createdOrder', data);
}

export { msg , createActionSocket , createOrderSocket };