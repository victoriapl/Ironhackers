const express = require('express');
const router  = express.Router();
const User = require('../models/User')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/editProfile/:id', (req, res, next) => {
  const { id } = req.params
  User.findById(id)
    .then(user => {
      res.render('editProfile', {user})
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/editProfile/:id', (req, res, next) => {
  const { id } = req.params
  const { username, name, age, currentJob } = req.body
  console.log(req.body)
  User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(() => {
      const user = req.user
      res.redirect(`/profile/${user._id}`)
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/profile/:id', (req, res, next) => {
  const { id } = req.params
  User.findById(id)
    .then(user => {
      res.render('profile', { user })
    })
    .catch(err => {
      res.send(err)
    })
})


module.exports = router;
