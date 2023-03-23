const express = require('express');

const validate = require('../middlewares/validate')
const meetupController = require('../controllers/meetupController')
const meetupValidation = require('../validation/meetupValidation')

const router = express.Router()

router.route('/')
      .post(validate(meetupValidation.createMeetup), meetupController.createMeetup)
      .get(meetupController.getAllMeetups)
router.route('/:meetupId')
      .post(validate(meetupValidation.updateMeetup), meetupController.updateMeetup)
      .get(validate(meetupValidation.getMeetup), meetupController.getMeetup)

module.exports = router