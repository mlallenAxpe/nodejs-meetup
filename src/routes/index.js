const express = require('express');
const authRoutes = require('./authRoutes');
const meetupRoutes = require('./meetupRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router()

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoutes
  },
  {
    path: '/meetup',
    route: meetupRoutes
  },
  {
    path: '/user',
    route: userRoutes
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;