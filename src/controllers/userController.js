const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync')
const { userService } = require('../service')

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
})

const getUser = catchAsync(async (req, res) => {
  let user
  if (req.params.id) user = await userService.getUserById(req.params.id)
  else if (req.body.email) user = await userService.getUserByEmail(req.body.email)
  res.status(httpStatus[200]).send(user)
})

const getFavorites = catchAsync(async (req, res) => {
  const favorites = await userService.getUserFavorites(req.params.id)
  res.status(httpStatus[200]).send(favorites)
})

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body.update)
  res.status(httpStatus[200]).send(user)
})

const updateFavorites = catchAsync(async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body.favorites)
  res.status(httpStatus[200]).send(user)
})

module.exports = {
  createUser,
  getUser,
  getFavorites,
  updateFavorites,
  updateUser
}