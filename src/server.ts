import express from 'express';
import router from './routes/router';
import cors from "cors";

const server = express();

// Allows json body parsing
server.use(cors({ origin: "*" }));
server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: true }));

// Add base router
server.use('/', router);

export default server;