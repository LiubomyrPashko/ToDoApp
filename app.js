const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const homeRoutes = require('./routes/addTask')
const deleteRoutes = require('./routes/deleteTask')
const searchRoutes = require('./routes/search')
const url = `mongodb+srv://Pashko:0000@cluster1.wl7ze.mongodb.net/<Tasks>?retryWrites=true&w=majority`
const bodyParser = require('body-parser')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', homeRoutes)
app.use('/', deleteRoutes)
app.use('/', searchRoutes)

async function start() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, () => {
      console.log(`app has been started on port ${PORT}`)
    })
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()
