const express = require('express')
const route = express.Router()
const {DataEntry, FolioEntry} = require('../Controllers/MainController')
route.post('/enquiryentry',DataEntry)
route.post('/Folioentry',FolioEntry)


module.exports = route