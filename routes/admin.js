const router = require('express').Router()
const User = require('../models/User')
const Agora = require('../models/Agora')
const EduRes = require('../models/EduRes')
const Email = require('../models/Email')
const {isLogged} = require('../handlers/middlewares')
const {isAdmin} = require('../handlers/middlewares')

router.get('/profile/:id', isAdmin, (req, res, next) => res.render('admin/profile'))

//ELIMINAR UN ELEMENTO DE UN ARREGLO, CÓMO??? 
router.get('/deleteExtraRes', (req, res, next) => {
  const { id } = req.body
  const { extraResources } = req.body
  EduRes.findByIdAndRemove(id, {$pull: extraResources}, {new: true})
    .then(info => {
      res.redirect(`/extraRes/${info._id}`)
    }) 
    .catch(err => {
      console.log(err)
    })
})




module.exports = router