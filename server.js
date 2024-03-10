const ws = require("ws");
curentUser = 0;
const server = new ws.Server({port:8080});
server.on("connection",(ws)=>{
    
    curentUser+=1;
    console.log("connected current user is"+ curentUser);
    ws.on("message", (message)=>{
        ws.send(message.toString());
    });
} );
ws.on('close', (ws)=>{
   curentUser-=1;
    console.log('Client disconnected current user is'+ curentUser);
  });
