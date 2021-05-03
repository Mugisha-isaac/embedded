const mongoose = require('mongoose');
const connectionUrl = require('./config');
const connection = mongoose.connect(connectionUrl.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to db successfully');
}).catch(()=>console.log('Failed to connect to db'));
module.exports = connection;