import express from 'express'
import { urlencoded, json } from 'body-parser'
import "core-js/stable";
import "regenerator-runtime/runtime";
import cors from 'cors'
import mongoose from 'mongoose'
import chirpRouter from './routes/chirp-router'

const app = express()
const apiPort = 3000

app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(json())

// Database setup
mongoose
  .connect('mongodb://127.0.0.1:27017/handshake', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(e => {
    console.error('Connection error', e.message)
  })

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

// API
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', chirpRouter)


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))