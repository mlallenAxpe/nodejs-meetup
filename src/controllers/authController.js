const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync')
const { authService, userService } = require('../service')

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body)
  res.status(httpStatus.CREATED).send({ user })
})

const login = catchAsync(async (req, res) => {
  const { username, password } = req.body
  const user = await authService.loginWithUserAndPassword(username, password)
  res.send(user)
})

module.exports = {
  register,
  login
}