const app =require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');
// const http = require('http').Server();
// var io = require('socket.io')(http);
const http = require('http');
const express = require('express');
const path = require('path');

const DbConnection = require('./db.model');
const {dataRoutes} = require('./data.routes');
const port = process.env.PORT || 3000;
 
const server = http.createServer(app);
const io = socketio(server);


io.on('connection',(socket)=>{
    console.log('client connection received');
    socket.emit('sendToClient', {hello:'world'});

socket.on('receivedFromClient', (data)=>{
    console.log(data);
})

})

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'./src')));


app.use('/esp8266',dataRoutes);

server.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})
module.exports = io;



