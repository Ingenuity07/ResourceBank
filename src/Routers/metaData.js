const express = require('express')
const router = express.Router();

const MetaData = require('../models/metaData')

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
        console.log(data);
        await data.save();
        res.status(201).send();
    }catch(err){
        res.status(500).send(err);
    }
})
router.patch('/metadata',async (req,res)=>{
    res.send('metadata')
})
router.delete('/metadata',async (req,res)=>{
    res.send('metadata')
})



module.exports=router