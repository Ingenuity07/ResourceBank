const express = require('express')
const app=express();
require('./db/mongoose.js')
const port = 8000
const credential = require('./Routers/credential')
const metaData = require('./Routers/metaData')
const document = require('./Routers/documents')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/credential',credential);
app.use('/metaData',metaData);
app.use('/document',document);

app.use(express)


app.listen(port,()=>{
    console.log("Server is up on port ",port);
})