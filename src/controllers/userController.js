const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync')
const { userService } = require('../service')

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
})

const getUser = catchAsync(async (req, res) => {
  let user
  if (req.params.userId) user = await userService.getUserById(req.params.userId)
  else if (req.body.email) user = await userService.getUserByEmail(req.body.email)
  res.status(httpStatus.OK).send(user)
})

const getFavorites = catchAsync(async (req, res) => {
  const favorites = await userService.getUserFavorites(req.params.userId)
  res.status(httpStatus.OK).send(favorites)
})

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUser(req.params.userId, req.body)
  res.status(httpStatus.OK).send(user)
})

const updateFavorites = catchAsync(async (req, res) => {
  const user = await userService.updateUser(req.params.userId, req.body)
  res.status(httpStatus.OK).send(user)
})

module.exports = {
  createUser,
  getUser,
  getFavorites,
  updateFavorites,
  updateUser
}