const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
// const webinarRoutes = require('./webinar')

router.get("/ping", (req, res) => {
    const ready = {
        status: "server is ready"
    }
    res.status(200).send(ready)
})

router.use(artisRoutes)
// router.use(webinarRoutes)

module.exports = router