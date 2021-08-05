import  { Socket } from "socket.io";
import { createActionSocket, createOrderSocket, msg } from "../socket_handlers";

export const space = (socket: Socket) => {

    socket.on('msg', data => msg(socket, data));

    socket.on('createAction', data => createActionSocket(socket, data));
    socket.on('createOrder', data => createOrderSocket(socket, data));
}