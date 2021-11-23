const express = require('express')
const router = express.Router()
const multer = require('multer')
const input = multer()
const hr = require("../controller/hr")

router.get("/", hr.getHR)
router.post("/", input.any(), hr.createHR)

module.exports = router