const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String, 
        default: null
    },
    last_name: {
        type: String, 
        default: null
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        required: true,
        default: "Basic"
    }

})

module.exports = mongoose.model("User", userSchema)