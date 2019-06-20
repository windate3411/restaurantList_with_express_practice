const mongoose = require('mongoose')
const Restaurant = require('../schema.js')
const restaurant_json = require('../../restaurant.json')
const chalk = require('chalk')
const db = mongoose.connection
mongoose.connect('mongodb://127.0.0.1/restaurant', { useNewUrlParser: true })

// listening to DB connection
db.on('error', () => {
  console.log(chalk.red('MongoDB connecting failed!'));
})

db.once('open', () => {
  restaurant_json.results.forEach(item => {
    Restaurant.create({
      name: item.name,
      rating: item.rating
    })
  });
  console.log(chalk.green.inverse('MongoDB connected!'));
  console.log(chalk.green('Done!'));
})
