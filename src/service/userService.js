const httpStatus = require('http-status');
const { User } = require('../models')
const ApiError = require('../utils/ApiError')

const isEmailTaken = async (email) => {
  const user = await User.findOne({ email })
  return user ? true : false
}

const createUser = async (userBody) => {
  if (await isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken')
  }
  const user = await User.create(userBody)
  return user
}

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user
}

const getUserById = async (id) => {
  const user = await User.findById(id)
  return user
}

const getUserFavorites = async (id) => {
  const user = await User.findById(id);
  return user.favorites
}

const updateUser = async (id, userBody) => {
  const user = await User.findById(id)
  if(userBody.email) user.email = userBody.email
  if(userBody.password) user.password = userBody.password
  if(userBody.favorites) user.favorites = userBody.favorites
  user.save()
  return await User.findById(id)
}

module.exports = {
  isEmailTaken,
  createUser,
  getUserByEmail,
  getUserById,
  getUserFavorites,
  updateUser
}