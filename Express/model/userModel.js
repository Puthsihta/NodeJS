const mongoose = require('mongoose')

const userShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 65,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('users', userShema)
