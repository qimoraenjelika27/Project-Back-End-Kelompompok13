const UserModel = require("../Model/user")

class UserController {
    static async createNewUser(req, res) {
        try {
            const body = req.body;
            //const name = body.name;
            const User = new UserModel(body)
            const saved = await User.save()
            res.status(201).send(saved)
        } catch (eror) {
            res.status(500).send({err : error})
        }
    }
    static async updateUser(req, res) {
        try {
            const opt = {
                new : true
              }
              await UserModel.findOneAndUpdate({_id : req.params.id}, req.body, opt)
              .then(user => {
                if (!user) {
                  res.sendStatus(404)
                }
                res.status(201).json({
                  message : "user updated"
                })
              })
        } catch (error) {
            res.status(500).send({err : error})
        }
    }
    static async deleteUser(req, res) {
        try {
          const user = UserModel.findOneAndDelete({_id : req.params.id})
          .then(result => {
            if (!user) {
              res.status(404).json({
                message : "user not found",
              })
            }
            res.status(201).json({
              message : "user deleted",
            })
          })
        } catch (error) {
            res.status(500).send({err : error})
        }
    }
}

module.exports = UserController
