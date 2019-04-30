const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const uploadCloud = require('../handlers/cloudinary')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

const isLogged = (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect('/auth/login')
  next()
}

router.get('/editProfile/:id', isLogged, (req, res, next) => {
  const { id } = req.params
  User.findById(id)
    .then(user => {
      res.render('editProfile', {user})
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/editProfile/:id', isLogged, uploadCloud.single('profileImg'), (req, res, next) => {
  const { id } = req.params
  const { username, name, age, currentJob, twitter, linkedin, github, facebook, codewars, instagram } = req.body
  User.findByIdAndUpdate(id, { $set: {username, name, age, currentJob, twitter, linkedin, github, facebook, codewars, instagram, profileImg: req.file.secure_url } }, { new: true })
    .then(user => {
    return res.redirect(`/profile/${user._id}`)
    })
    .catch(err => {
      console.log('La cagaste')
    })
})

router.get('/profile/:id', isLogged, (req, res, next) => {
  const { id } = req.params
  User.findById(id)
    .then(user => {
      res.render('profile', {user})
    })
    .catch(err => {
      res.send(err)
    })
})




module.exports = router;
