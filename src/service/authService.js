const httpStatus = require('http-status')
const userService = require('./userService')
const APIError = require('../utils/ApiError')

const loginWithUserAndPassword = async (username, password) => {
  const user = await userService.getUserByEmail(username)
  if (!user || !user.isPasswordMatch(password)) {
    throw new APIError(httpStatus.UNAUTHORIZED, 'Incorrect username or password');
  }
  return user
}

module.exports = {
  loginWithUserAndPassword
}