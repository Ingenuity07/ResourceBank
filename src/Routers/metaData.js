const express = require('express')


const router = express.Router();

const MetaData = require('../models/metaData')

const app=express();




router.get('/fetch',async (req,res)=>{
    try{
        const data= await MetaData.find();
        res.status(200).send(data);

    }catch(err){
        res.status(500).send(err);
    }
})


router.post('/create',async (req,res)=>{
    const body=req.body;

    try{
        const data=new MetaData(body);
        await data.save();
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
    }
})


router.delete('/remove/:id',async (req,res)=>{
    try{
        const done= await MetaData.findByIdAndDelete({_id: req.params.id});
        if(!done){
            res.status(404).send("No entry associated with this id");
        }
        res.status(200).send(done);
    }catch(err){
        res.status(500).send(err);
    }
})



module.exports=router