const express = require('express')
const UserController = require('../controllers/user.controller')
const router = express.Router()

// get all User
router.get('/user', UserController.getAllUser)

// create new User
router.post('/user', UserController.createNewUser)

// get User by id
router.get('/user/:id', UserController.getUserById)

// update User by id
router.patch('/user/:id', UserController.updateUser)

// delete Usser by id
router.delete('/user/:id', UserController.deleteUser)

module.exports = router