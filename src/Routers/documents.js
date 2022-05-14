const express = require('express')
const router = express.Router();

const Documents = require('../models/documents')

router.get('/download',async (req,res)=>{
    res.send('Doc downloaded')
})


router.post('/upload',async (req,res)=>{
    res.send('Doc opll')
})

module.exports=router