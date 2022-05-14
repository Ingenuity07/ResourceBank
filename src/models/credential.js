const mongoose = require('mongoose')

const credentialSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('worng Email')
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:18,
        validate(value){
            if(value.toLowerCase().includes('password'))
            throw new Error("password must not contain 'password' as a substring");
        }
    },
    role:{
        type:String,
        required:true,
        default:"user"
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
},{
    timestamps:true
})



const Credential = mongoose.model('Credential',credentialSchema)

module.exports = Credential