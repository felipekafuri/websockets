import express from 'express';
import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';

const app = express();
app.use(express.json());

// HTTP server
const httpServer = new HttpServer(app);


// WebSocket server
const io = new Server(httpServer, {
  cors:{
    origin: '*',
  }
});

export {httpServer, io }


