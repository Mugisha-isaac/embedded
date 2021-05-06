const mongoose = require('mongoose');
const Data = require('./Data.model');


module.exports.CreateData=(req,res)=>{
    const io = require('./index');

    const data = new Data();
    const {UUID,InitialBalance,TransportFare} = req.body;
    const NewBalance = (InitialBalance - TransportFare);
    data.UUID = UUID;
    data.InitialBalance = InitialBalance;
    data.TransportFare = TransportFare;
    data.NewBalance = NewBalance;
    data.save();
    console.log(data);

    io.emit('DATA_SAVED', data);
    res.send(data);
}

module.exports.readData= async(_,res)=>{
    const data = await Data.find();
    if(data){
      console.log(data);
      res.send(data).status(200);
      return;
    }
    res.send("Data not found!").status(404);
}