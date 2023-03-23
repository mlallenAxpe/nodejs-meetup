const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync')
const { meetupService } = require('../service')

const createMeetup = catchAsync(async (req, res) => {
  const meetup = await meetupService.createMeetup(req.body);
  res.status(httpStatus.CREATED).send(meetup)
})

const updateMeetup = catchAsync(async (req, res) => {
  const id = req.params.id
  const meetupBody = req.body
  const meetup = await meetupService.updateMeetup(id, meetupBody)
  res.status(httpStatus.OK).send(meetup)
})

const getMeetup = catchAsync(async (req, res) => {
  const id = req.params.id
  const meetup = await meetupService.findMeetupById(id)
  res.status(httpStatus.OK).send(meetup)
})

const getAllMeetups = catchAsync(async (req, res) => {
  const meetups = await meetupService.findMeetups()
  res.status(httpStatus.OK).send(meetups)
})

module.exports = {
  createMeetup,
  updateMeetup,
  getMeetup,
  getAllMeetups
}