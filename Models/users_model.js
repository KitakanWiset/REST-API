const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    UserName:String,
    PassWord:String,
    FirstName:String,
    LastName:String,
},{
    timestamp:true
})

module.exports = mongoose.model('users', userSchema)