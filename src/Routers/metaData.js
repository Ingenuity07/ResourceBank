const express = require('express')
const router = express.Router();

const MetaData = require('../models/metaData')

router.get('/metadata',async (req,res)=>{
    res.send('metadata')
})
router.post('/metadata',async (req,res)=>{
    res.send('metadata')
})
router.patch('/metadata',async (req,res)=>{
    res.send('metadata')
})
router.delete('/metadata',async (req,res)=>{
    res.send('metadata')
})



module.exports=router