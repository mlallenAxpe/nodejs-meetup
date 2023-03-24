const Joi = require('joi')

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
}
const updateUser = {
  body: Joi.object().keys({
    email: Joi.string(),
    password: Joi.string()
  }),
  params: Joi.object().keys({
    userId: Joi.string().required()
  })
}
const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().required()
  })
}
const updateFavorites = {
  body: Joi.object().keys({
    favorites: Joi.array().required()
  }),
  params: Joi.object().keys({
    userId: Joi.string().required()
  })
}
const getFavorites = {
  params: Joi.object().keys({
    userId: Joi.string().required()
  })
}

module.exports = {
    createUser,
    updateUser,
    getUser,
    updateFavorites,
    getFavorites
}