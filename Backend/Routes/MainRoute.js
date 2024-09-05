const express = require('express')
const route = express.Router()
const {DataEntry} = require('../Controllers/MainController')
route.post('/enquiryentry',DataEntry)


module.exports = route