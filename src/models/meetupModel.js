const mongoose = require("mongoose")

const meetupSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  }, 
  title: {
    type: String,
    required: true
  }, 
  image: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
const Meetup = mongoose.model("Meetup", meetupSchema)

module.exports = Meetup