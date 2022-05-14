const express = require('express')
const app=express();
require('./db/mongoose.js')
const port = 3000||process.env.PORT;
const credential = require('./Routers/credential')
const metaData = require('./Routers/metaData')


app.use(express.json())
app.use('/credential',credential);
app.use('/metaData',metaData);


app.listen(port,()=>{
    console.log("Server is up on port ",port);
})