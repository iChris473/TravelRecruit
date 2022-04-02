const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    dob : {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true,
    },
    work: {
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    travel: {
        type: String,
        required: true,
    },
    ietls: {
        type: String
    },
    passportNo:{
        type: String,
        required: true,
    },
    passPortImg:{
        type: Array,
        required: true,
    },
    cvImg:{
        type: Array,
        required: true,
    },
    educationImg: {
        type: Array,
        required: true,
    }


}, {timestamps: true})

UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next()
    }
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
})

UserSchema.methods.getSignedToken = function(){
    return jwt.sign({id: this._id}, process.env.JWTSECRET, {expiresIn: '9999y'})
}

module.exports = mongoose.model("Users", UserSchema)