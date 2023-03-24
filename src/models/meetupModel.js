const mongoose = require("mongoose")

const MeetupSchema = mongoose.Schema({
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
const Meetup = mongoose.model("Meetup", MeetupSchema)

module.exports = Meetup