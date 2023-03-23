const express = require('express');
const meetupController = require('../controllers/meetupController')

const router = express.Router()

router.route('/').post(meetupController.createMeetup).get(meetupController.getAllMeetups)
router.route('/:meetupId').post(meetupController.updateMeetup).get(meetupController.getMeetup)

module.exports = router