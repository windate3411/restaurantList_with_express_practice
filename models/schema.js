const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('restaurantSchema', restaurantSchema, 'restaurant_list')