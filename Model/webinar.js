const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const userSchema = new mongoose.Schema({
    countries: {
        type: String,
        enum: [
            "Indonesia", 
            "Malaysia", 
            "Singapura", 
            "Brunei",
            "Kamboja", 
            "Vietnam", 
            "Thailand", 
            "Laos", 
            "Myanmar", 
            "Filipina"
        ],
        lowercase: true,
        required: [true, 'countri is required']
    },
    deskripsi: {
        type: String,
        required: true
    },
    judul: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    
}, timestamps)

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel
