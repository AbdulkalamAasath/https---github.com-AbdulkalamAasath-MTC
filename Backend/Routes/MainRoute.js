const express = require('express')
const route = express.Router()
const {DataEntry, FolioEntry, FolioUpdate} = require('../Controllers/MainController')
route.post('/enquiryentry',DataEntry)
route.post('/Folioentry',FolioEntry)
route.post('/updateFolioentry',FolioUpdate)


module.exports = route