const httpStatus = require('http-status');
const { User } = require('../models')
const { APIError } = require('../utils/ApiError')

const isEmailTaken = async (email) => {
  const user = await User.findOne({ email })
  if (user) return true
  return false
}

const createUser = async (userBody) => {
  if (await isEmailTaken(userBody.email)) {
    throw new APIError(httpStatus.BAD_REQUEST, 'Email already taken')
  }
  const user = await User.create(userBody)
  return user
}

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user
}

const getUserFavorites = async (id) => {
  const user = await User.findOne({ id });
  return user.favorites
}

const updateUser = async (id, userBody) => {
  const user = await User.findByIdAndUpdate(id, userBody)
  return user
}

const updateFavorites = async (id, favorites) => {
  const user = await User.findByIdAndUpdate(id, { favorites })
  return user
}

module.exports = {
  isEmailTaken,
  createUser,
  getUserByEmail,
  getUserFavorites,
  updateUser,
  updateFavorites
}