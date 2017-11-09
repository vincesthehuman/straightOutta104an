const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routes/index.js'))

app.listen(3001, function() {
  console.log('listening on port 3001!')
})
