const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync')
const { meetupService } = require('../service')

const createMeetup = catchAsync(async (req, res) => {
  const meetup = meetupService.createMeetup(req.body);
  res.status(httpStatus.CREATED).send(meetup)
})

const updateMeetup = catchAsync(async (req, res) => {
  const id = req.params.id
  const meetupBody = req.body
  const meetup = meetupService.updateMeetup(id, meetupBody)
  res.status(httpStatus[200]).send(meetup)
})

const getMeetup = catchAsync(async (req, res) => {
  const id = req.params.id
  const meetup = meetupService.findMeetupById(id)
  res.status(httpStatus[200]).send(meetup)
})

const getAllMeetups = catchAsync(async (req, res) => {
  const meetups = meetupService.findMeetups()
  res.status(httpStatus[200]).send(meetups)
})

module.exports = {
  createMeetup,
  updateMeetup,
  getMeetup,
  getAllMeetups
}