const router = require('express').Router()
const User = require('../models/User')
const Agora = require('../models/Agora')
const uploadCloud = require('../handlers/cloudinary')
const {isLogged} = require('../handlers/middlewares')

router.get('/', (req, res, next) => {
  Agora.find()
  .sort({ createdAt: -1 })
  .then(posts => {
    const userID = req.user._id
    posts.userID = userID
    res.render('agora/index', {posts})
  })
  .catch(err => res.send(err))
})

router.get('/post', (req, res, next) => {
  res.render('agora/post')
})

router.post('/post', uploadCloud.single('image'), (req, res, next) => {
  const { title, content, image } = req.body
  Agora.create({title, content, image: req.file ? req.file.secure_url : ''})
  .then(post => {
    res.redirect('/agora')
  })
  .catch(err => res.send(err))
})



module.exports = router