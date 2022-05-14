const express = require('express')
const app=express();
const port = process.env.PORT;
const credential = require('./Routers/credential')
const metaData = require('./Routers/metaData')
require('./db/mongoose')
app.use(express.json())

app.use('/credential',credential);
app.use('/metaData',metaData);


app.listen(port,()=>{
    console.log("Server is up on port ",port);
})