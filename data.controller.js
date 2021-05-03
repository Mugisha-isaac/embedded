const mongoose = require('mongoose');
const Data = require('./Data.model');


module.exports.CreateData=(req,res)=>{
    const data = new Data();
    const {UUID,InitialBalance,TransportFare} = req;
    data.UUID = UUID;
    data.InitialBalance = InitialBalance;
    data.TransportFare = TransportFare;
    data.save();
    res.send(data);
}

module.exports.readData=(req,res)=>{
    const data = Data.find();s
    if(data){
      res.send(data).status(200);
      return;
    }
    res.send("Data not found!").status(404);
}