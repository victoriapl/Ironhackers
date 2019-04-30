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

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    const user = req.user
    if(req.body.username === null){ 
      req.app.locals.loggedUser = user
      return res.redirect(`/editProfile/${user._id}`)
    } return res.redirect(`/profile/${user._id}`)
})

router.get('/logout', (req, res, next) => {
  res.render('/logout')
})

router.get('/logout', (req, res) => {
  req.app.locals.loggedUser = ''
  if(req.app.locals.loggedUser === ''){
    req.logOut()
    res.redirect('/')
  }
});

module.exports = router;
