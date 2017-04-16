#!/usr/bin/env node
var PORT = 8001;
var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: PORT });

server.on('connection', ws => {
    ws.on('message', message => {
        try {
            server.clients.forEach(client => {
                client.send(message);
            }); 
        } catch (e) {
            console.error(e.message);
        }
    });
});

console.log('Server is running on port', PORT);