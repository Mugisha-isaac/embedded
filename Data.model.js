const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DataSchema = new Schema({
    UUID:{
        type:String,
        required:true
    },
    InitialBalance:{
        type:Number,
        required:true
    },
    TransportFare:{
        type:Number,
        required:true,
    },
    Date:{
        type:Date,
        default:new Date(Date.now()).toISOString()
    },
    NewBalance:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Esp8266Module',DataSchema);