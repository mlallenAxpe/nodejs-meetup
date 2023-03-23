const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  },
  favorites: {
    type: Array,
    default: []
  }
})
const User = mongoose.model("User", userSchema)

module.exports = User