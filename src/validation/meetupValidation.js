const Joi = require('joi')

const createMeetup = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    image: Joi.string().required(),
    address: Joi.string().required(),
    description: Joi.string().required()
  })
}

const getMeetup = {
  params: Joi.object().keys({
    meetupId: Joi.string().required()
  })
}

const updateMeetup = {
  body: Joi.object().keys({
    title: Joi.string(),
    image: Joi.string(),
    address: Joi.string(),
    description: Joi.string()
  }),   
  params: Joi.object().keys({
    meetupId: Joi.string().required()
  })
}
  

module.exports = {
  createMeetup,
  getMeetup,
  updateMeetup
}