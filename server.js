const { messaging } = require("firebase-admin");
const ws = require("ws");
const server = new ws.Server({port:8080});
server.on("connection",(ws)=>{
    console.log("connected");
    ws.on("message", (message)=>{
        ws.send(message);
    });
} );
