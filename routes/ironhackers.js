const router = require('express').Router()
const User = require('../models/User')

router.get('/profiles', (req, res, next) => {
  User.find()
  .then(users => {
    res.render('profiles/ironhackers', { users })
  })
})



module.exports = router