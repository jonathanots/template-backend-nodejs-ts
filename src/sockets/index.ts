import { Server, Socket } from "socket.io";


export const createSocket = (app: any) => {

    const io = new Server(app);

    io.on('connection', (socket:Socket) => {
        console.log("Some entry point was connected.");
    });
}