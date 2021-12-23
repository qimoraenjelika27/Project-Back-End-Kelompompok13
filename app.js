const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const UserModel= require("./Model/user")

const port = process.env.PORT || 3000
const uri = process.env.MONGODB_URI

const openDBConnection = require("./Helper/db")
const options = {
  user : process.env.MONGODB_USER,
  pass : process.env.MONGODB_PASS
}

openDBConnection(uri, options)
const app = express()

// middleware
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//rute user
app.post("/user", (req,res)=> {
    const data=  req.body
    const newdata= new UserModel(data)
    newdata.save()
        .then(result => {
            res.status(201).json({
            message : "Register success",
            result
        })
    })
})

app.get("/user", (req,res)=> {
    const userData =  UserModel.find()
    res.status(200).json(userData)
})
app.get("/user/:id",(req,res)=>{
        User.findOne({
        _id : req.params.id
    })
        .then(user => {
        res.status(200).json(user)
})
})

// server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

