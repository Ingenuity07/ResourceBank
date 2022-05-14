const express = require('express')
const app=express();
const port = 3000||process.env.PORT;
const credential = require('./Routers/credential')

app.use('/credential',credential);


app.listen(port,()=>{
    console.log("Server is up on port ",port);
})