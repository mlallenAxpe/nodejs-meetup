const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true }
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
userSchema.pre('save', (next) => {
  var user = this;
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, function (err, hash){
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})
userSchema.methods.isPasswordMatch = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}
  
const User = mongoose.model("User", userSchema)

module.exports = User