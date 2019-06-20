const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const chalk = require('chalk')
// setting db connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/restaurant', { useNewUrlParser: true })
const db = mongoose.connection

// setting templates
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// listening to DB connection
db.on('error', () => {
  console.log(chalk.red('MongoDB connecting failed!'));
})

db.once('open', () => {
  console.log(chalk.green.inverse('MongoDB connected!'));
})

// setting model
const Restaurant = require('.models/schema.js');