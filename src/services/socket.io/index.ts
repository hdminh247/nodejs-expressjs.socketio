// Libraries
import { Server } from 'http';
import * as initSocket from 'socket.io';

const socketIOTitle = '[Socket.io]';

export default class SocketIO {
    private io: any;

    constructor() {
    }

    public run(server: Server): void {
        // Start socket
        this.io = initSocket(server, {
            pingTimeout: 10000, // How many ms without a pong packet to consider the connection closed,
            origins: '*:*', //CORS,
            handlePreflightRequest: (req, res) => {
                const headers = {
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                    "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
                    "Access-Control-Allow-Credentials": true
                };
                res.writeHead(200, headers);
                res.end();
            }
        });

        console.info(`${socketIOTitle} Listening new connection...`);

        // Default namespace for other user except admin
        this.io.use((socket, next) => {
            console.log('Socket middleware')
            next();
        })
        // Client connect listener
            .on('connection', async client => {
                console.debug(`${socketIOTitle} Client connected: SocketID = ${client.id}`);

                client.on("sendMessage", ({ message, type}, cb) => {
                    cb(`Receive`)
                });
            });
    }
}
