import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import * as cors from "cors";
import * as dotenv from 'dotenv';
import * as http from 'http';

// Load environment variables from .env file
dotenv.config();

import SocketIO from './services/socket.io';


(async () => {

    // Create Express server
    const app = express();

    // Express configuration
    app.all('/*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });

    // Request body parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    // Enable CORS
    app.use(cors());
    // Create http server with express
    const httpServer = http.createServer(app);

    // Start Express server
    httpServer.listen(process.env.PORT || 3000, () => {
        console.log(("  App is running at http://localhost:%d in %s mode"), process.env.PORT || 3000, app.get("env"));
        console.log("  Press CTRL-C to stop\n");
    });

    // Start socket server
    global.socket = new SocketIO();
    global.socket.run(httpServer);

})();
