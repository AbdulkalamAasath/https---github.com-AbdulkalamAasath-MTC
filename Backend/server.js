const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const MainRoute = require('./Routes/MainRoute') // Ensure this file exports a valid router

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

// Corrected: Path comes first, then the route handler
app.use('/MTC', MainRoute)

app.use((req, res, next) => {
    console.log(req.path, req.method, req.body)
    next()
})

const PORT = 4000

mongoose.connect("mongodb://localhost:27017/MTC")
    .then(() => {
        console.log('connected to database')
        app.listen(PORT, () => {
            console.log('listening for requests on port', PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
