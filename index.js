const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const DbConnection = require('./db.model');
const {dataRoutes} = require('./data.routes');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/esp8266',dataRoutes);

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})


