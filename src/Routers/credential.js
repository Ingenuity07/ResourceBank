const express =require('express');
const Credential = require('../models/credential')
const router = new express.Router();


//TEST
router.get('/test',(req,res)=>{
    res.send("credential wworking")                                                                                                                                                                                                                                    
})

//ADMIN
router.post('/admin/login',async (req,res)=>{
    res.send("admin working")
})

//USER
router.post('/user/signup',async (req,res)=>{
    res.send("signup working")
})

router.post('/user/signin',async (req,res)=>{
    res.send("signin working")
})


module.exports = router


