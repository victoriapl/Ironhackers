const router = require("express").Router();
const passport = require('../handlers/passport')
const User = require('../models/User')
const Email = require('../models/Email')

router.get("/signup", (req, res, next) => {
  res.render("auth/signup")
});

router.get("/login", (req, res, next) => {
  res.render("auth/login")
});

router.post('/signup', (req, res, next) => {
  Email.findOne({email: req.body.email})
  .then((data) => {
    if(!data){
     res.send('You are not an ironhacker')
    } User.register({...req.body}, req.body.password)
      .then(()=>{
        res.redirect('/auth/login')
      })
      .catch(err => console.log(err))    
  })
  .catch(err => console.log('You are not an ironhacker'))
})

router.post('/login', (req, res, next) => { 
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err)
    if (!user) return res.redirect('/auth/login')
    req.logIn(user, error => {
      if (error) return next(err)
      const { user } = req
      req.app.locals.loggedUser = user
      if (req.user.role == 'ADMIN') return res.redirect(`/profile/${user._id}`)
      console.log(req.user.role)
      if (user.username === '') return res.redirect(`/editProfile/${user._id}`) 
      return res.redirect(`/profile/${user._id}`)  
    })
  })(req, res, next)
})


router.get('/logout', (req, res, next) => {
  req.app.locals.loggedUser = ''
  req.logOut()
  res.redirect('/auth/login')
})

module.exports = router;
