const router = require('express').Router()
const User = require('../models/User')
const {isLogged} = require('../handlers/middlewares')

router.get('/profiles', isLogged, (req, res, next) => {
  const id = req.user._id
  let admin = req.user.role === 'ADMIN'
  User.find()
  .then(users => {
    users.id = id
    const data = {users, admin}
    res.render('profiles/ironhackers', data)
  })
})

router.get('/deleteProfile/:id', (req, res, next) => {
  const {id} = req.params
  User.findByIdAndDelete(id)
    .then(user => {
      res.redirect('/ih/profiles')
    }) 
    .catch(err => res.send(err))
})

module.exports = router