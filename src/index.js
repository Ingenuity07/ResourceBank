const express = require('express')
const app=express();
require('./db/mongoose.js')
const port = 3000||process.env.PORT;
const credential = require('./Routers/credential')
const metaData = require('./Routers/metaData')
const document = require('./Routers/documents')

app.use(express.json())
app.use('/credential',credential);
app.use('/metaData',metaData);
app.use('/document',document);


app.listen(port,()=>{
    console.log("Server is up on port ",port);
})