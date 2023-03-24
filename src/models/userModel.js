const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const UserSchema = mongoose.Schema({
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
UserSchema.pre("save", function(next) {
  var user = this;
  if (user.isNew || user.isModified("password")){
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err)
      else {
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if(hashError) return next(hashError)
          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})
UserSchema.methods.isPasswordMatch = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}
  
const User = mongoose.model("User", UserSchema)

module.exports = User