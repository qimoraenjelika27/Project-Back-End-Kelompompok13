const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, timestamps)

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel
