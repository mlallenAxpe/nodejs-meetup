const express = require('express');

const router = express.Router()

router.route('/').post()
router.route('/:userId').post().get()
router.route('/:userId/favorites').post().get()

module.exports = router