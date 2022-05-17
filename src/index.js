const express = require('express')
const app=express();
require('./db/mongoose.js')
const passport=require("passport");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const session = require('express-session');
const port = process.env.PORT;
const credential = require('./Routers/credential')
const metaData = require('./Routers/metaData')
const document = require('./Routers/documents')

const cors=require('cors');
app.use(cors());

app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}));

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: process.env.SECRET ,
  resave: false,
  saveUninitialized: false
}))


app.use('/credential',credential);
app.use('/metaData',metaData);
app.use('/document',document);


app.listen(port,()=>{
    console.log("Server is up on port ",port);
})