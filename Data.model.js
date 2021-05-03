const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DataSchema = new Schema({
    UUID:{
        type:String,
        required:true
    },
    InitialBalance:{
        type:String,
        required:true
    },
    TransportFare:{
        type:Number,
        required:true,
    },
    Date:{
        type:Date,
        default:new Date()
    }
})