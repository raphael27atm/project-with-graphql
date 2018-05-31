"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htpp = require("http");
const app_1 = require("./app");
const server = htpp.createServer(app_1.default);
server.listen(3000);
server.on('listening', () => console.log('Listening on port 3000...'));
