require('dns').setServers(['8.8.8.8', '1.1.1.1']);
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')
const PORT = process.env.PORT || 3000
const cors = require('cors')

// controllers imports
const petRouter = require('./controllers/pets')

app.use(cors({ origin: 'http://localhost:5173' }))

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB: ${mongoose.connection.name}`)
})

app.use(express.json())
app.use(logger('dev'))

app.use('/pets', petRouter)

app.listen(PORT, () => {
    console.log (`You are listening on PORT: ${PORT}`)
})