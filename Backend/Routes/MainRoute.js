const express = require('express')
const route = express.Router()
const {DataEntry, FolioEntry, FolioUpdate, getEnquiry, getFolio} = require('../Controllers/MainController')
route.post('/enquiryentry',DataEntry)
route.post('/Folioentry',FolioEntry)
route.post('/updateFolioentry',FolioUpdate)
route.get('/getEnquiry',getEnquiry)
route.get('/getFolio',getFolio)

module.exports = route