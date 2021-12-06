import { Server, Socket } from "socket.io";
import { space } from "./space";

export const createSocket = (app: any) => {

    const options = {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    };

    const io = new Server(app, options);

    io.on('connection', (socket:Socket) => {
        console.log("Some entry point was connected.");

        space(socket);
    });
}