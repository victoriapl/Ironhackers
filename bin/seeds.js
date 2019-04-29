require('dotenv').config();
const mongoose = require('mongoose')
const Email = require('../models/Email')

let emails = [{email: 'victoriapp15@gmail.com'}, {email: 'regina@gmail.com'}, {email: 'pepito@gmail.com'}]

mongoose
.connect(process.env.DB, {useNewUrlParser: true})
.then(()=> {
  Email.create(emails)
  console.log('Your database is working!')
})
.catch(err => (console.log(err)))
// .then(()=> {
//   mongoose.connection.close()
// })
// .catch(err => console.log(err))

