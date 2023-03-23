const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router()

router.route('/').post(userController.createUser)
router.route('/:userId').post(userController.updateUser).get(userController.getUser)
router.route('/:userId/favorites').post(userController.updateFavorites).get(userController.getFavorites)

module.exports = router