const WebSocket = require('ws')

const wss = new WebSocket.Server({port: 8000})

wss.on("connect", ws =>{
    console.log("new client is added");

    ws.on("close",()=>{
        console.log("client disconnected");
    })
})