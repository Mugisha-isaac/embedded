const mongoose = require('mongoose');
const Data = require('./Data.model');


module.exports.CreateData=async(req,res)=>{
    const io = require('./index');
    const data = new Data();
    const {UUID,InitialBalance,TransportFare} = req.body;
    const foundUuidd = await Data.findOne({UUID:UUID});
    if(foundUuidd){
      console.log("uuidd: ", foundUuidd.UUID);
      const oldBalance = foundUuidd.NewBalance;
      const newBalance = (oldBalance - TransportFare);
      let date = new Date();
      try{
        await Data.findOneAndUpdate(
          {UUID:UUID},
          {
            NewBalance:newBalance,
            Date:date,
            OldBalance:oldBalance,
            TransportFare: TransportFare
          }
        );
        io.emit('UPDATE_BALANCE', ({UUID, newBalance, Date:date, OldBalance, TransportFare}))
        res.send('User already exists');
      }
      catch(e){
         res.status(400).json({error: e})
      }
     
      
    }
    else{
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