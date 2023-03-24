const express = require('express');

const validate = require('../middlewares/validate')
const userController = require('../controllers/userController')
const userValidation = require('../validation/userValidation')
const router = express.Router()

router.route('/').post(validate(userValidation.createUser), userController.createUser)
router.route('/:userId')
      .post(validate(userValidation.updateUser), userController.updateUser)
      .get(validate(userValidation.getUser), userController.getUser)
router.route('/:userId/favorites')
      .post(validate(userValidation.updateFavorites), userController.updateFavorites)
      .get(validate(userValidation.getFavorites), userController.getFavorites)

module.exports = router