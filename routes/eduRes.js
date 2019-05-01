const router = require("express").Router();
const { isLogged } = require('../handlers/middlewares')
const EduRes = require('../models/EduRes')
const User = require('../models/User')

router.get('/eduRes', isLogged, (req, res, next) => {
  const userID = req.user._id
  EduRes.find()
  .then(eduRes => {
    eduRes.userID = userID
    res.render('eduRes/eduRes', { eduRes })
  })
})

router.get('/eduRes/:id', isLogged, (req, res, next) => {
  const { id } = req.params
  const userID = req.user._id
  EduRes.findById(id)
    .then(info => {
      info.userID = userID
      res.render('eduRes/oneEduRes', {info})
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/learnings/:id', isLogged, (req, res, next) => {
  const { id } = req.params
  const userID = req.user._id
  EduRes.findById(id)
    .then(info => {
      info.userID = userID
      res.render('eduRes/learnings', info)
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/extraRes/:id', isLogged, (req, res, next) => {
  const { id } = req.params
  const userID = req.user._id
  EduRes.findById(id)
    .then(info => {
      info.userID = userID
      res.render('eduRes/extraRes', info)
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/newExtraRes/:id', isLogged, (req, res, next) => {
  const { id } = req.params
  EduRes.findById(id)
    .then(info => {
      res.render('eduRes/newExtraRes', info)
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/newExtraRes/:id', (req, res, next) => {
  const { id } = req.params
  const { extraResources } = req.body
  EduRes.findByIdAndUpdate(id, {$push: {extraResources}}, {new: true})
    .then(info => {
      res.redirect(`/extraRes/${info._id}`)
    }) 
    .catch(err => {
      res.send(err)
    })
})

module.exports = router