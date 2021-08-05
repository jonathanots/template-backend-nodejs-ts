import  { Socket } from "socket.io";
import { createActionHandler, createOrderHandler, msg } from "../socket_handlers";

export const space = (socket: Socket) => {

    socket.on('msg', data => msg(socket, data));

    socket.on('createAction', data => createActionHandler(socket, data));
    socket.on('createOrder', data => createOrderHandler(socket, data));
}