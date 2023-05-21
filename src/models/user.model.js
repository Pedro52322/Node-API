const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    }
})

const usersModel = mongoose.model("User", userSchema)

module.exports = usersModel;