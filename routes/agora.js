const router = require('express').Router()
const User = require('../models/User')
const Agora = require('../models/Agora')
const uploadCloud = require('../handlers/cloudinary')
const {isLogged} = require('../handlers/middlewares')


router.get('/', isLogged, (req, res, next) => {
  const userID = req.user._id
  Agora.find()
  .populate('userId')
  .sort({ createdAt: -1 })
  .then(posts => {
    posts.id = userID
    res.render('agora/index', {posts})
  })
  .catch(err => res.send(err))
})

router.get('/post', (req, res, next) => {
  res.render('agora/post')
})

router.post('/post', uploadCloud.single('image'), isLogged, (req, res, next) => {
  const userID = req.user.id
  const { userId, title, content, image } = req.body
  Agora.create({ userId: userID, title, content, image: req.file ? req.file.secure_url : ''})
  .then(post => {
    post.userID = userID
    res.redirect('/agora')
  })
  .catch(err => res.send(err))
})



module.exports = router