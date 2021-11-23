const express = require('express')
const router = express.Router()
const hr = require("./hr")

router.get('/', (req, res) => {
    res.status(200).send({
        status: "success",
        message: "masuk router",
    })
})

router.use("/hr", hr)

module.exports = router