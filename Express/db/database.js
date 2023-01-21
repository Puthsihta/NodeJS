const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://Puthsitha:fePHlMry43X9MqJ8@cluster0.gmy02ta.mongodb.net/Node_Express?retryWrites=true&w=majority',
  )
  .then((response) => {
    console.log('Connection to Database successfully')
  })
  .catch((error) => {
    console.log('Error connecting to', error)
  })

module.exports = mongoose
