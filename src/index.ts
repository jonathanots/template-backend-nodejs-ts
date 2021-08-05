import 'dotenv/config';
import { app } from "./app";
import { Server } from "http";
import { createSocket } from './sockets';

const server = new Server(app);

createSocket(server);

server.listen(process.env.PORT || 3333, () => {
    console.log(`[server] Server is up and running on http://localhost:${process.env.PORT}`);
});