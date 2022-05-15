const express = require('express')
const router = express.Router();
const multer = require('multer')
const sharp = require('sharp')
const Documents = require('../models/documents')

router.get('/download', async (req, res) => {

    try {
        const body = await Documents.find()

        console.log(body[0].subject)
        if (!body) {
            throw new Error();
        }
        // here we are setting response header 
        // set take two values key value paper
        // content type sets the type of data we are sending
        res.set('Content-Type','application/pdf')
        res.send(body[0].document)
    }
    catch (e) {
        res.send(e)
    }
})

const upload = multer(/*options object=>*/{

    // we can set multiple type of limits
    limits: {
        fileSize: 15000000
    },

    // req=> contain request made
    // file=>has info about file 
    // cb=> its a call back to tell we are done
    fileFilter(req, file, cb) {

        // in regular expression \. is used to escape . then we list out the files we can accept then end it with $

        if (!file.originalname.match(/\.(pdf)$/)) //<= this is regular expression to filter the file type
            return cb(new Error('Please upload pdf file'))


        return cb(null, true)
    }
});

router.post('/upload', upload.single('document'), async (req, res) => {
    console.log(req.body)
    req.body.document = req.file.buffer

    
    const body = new Documents(req.body)

    await body.save();
    
    res.status(200).send("success");


}, (error, req, res, next) => {
    // this would send customized HTML error 
    // it would send errors in middleware if any 
    res.status(400).send({ error: error.message })
})



module.exports=router