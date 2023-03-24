const httpStatus = require('http-status')
const { Meetup } = require('../models')
const ApiError = require('../utils/ApiError')

const createMeetup = async (meetupBody) => {
  const meetup = await Meetup.create(meetupBody)
  return meetup
}

const updateMeetup = async (id, meetupBody) => {
  const meetup = await Meetup.findByIdAndUpdate(id, meetupBody)
}

const findMeetupById = async (id) => {
  const meetup = await Meetup.findById(id)
  return meetup
}

const findMeetups = async () => {
  const meetups = await Meetup.find({})
  return meetups
}

module.exports = {
  createMeetup,
  updateMeetup,
  findMeetupById,
  findMeetups
}