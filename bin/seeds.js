require('dotenv').config();
const mongoose = require('mongoose')
const Email = require('../models/Email')
const EduRes = require('../models/EduRes')

let emails = [{email: 'victoriapp15@gmail.com'}, {email: 'regina@gmail.com'}, {email: 'pepito@gmail.com'}]

let eduRes = [
  {
    name: 'JAVASCRIPT',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6369', 'http://learn.ironhack.com/#/learning_unit/7872', 'http://learn.ironhack.com/#/learning_unit/7873', 'http://learn.ironhack.com/#/learning_unit/6370', 'http://learn.ironhack.com/#/learning_unit/6377', 'http://learn.ironhack.com/#/learning_unit/6424', 'http://learn.ironhack.com/#/learning_unit/6378', 'http://learn.ironhack.com/#/learning_unit/6409', 'http://learn.ironhack.com/#/learning_unit/6408', 'http://learn.ironhack.com/#/learning_unit/6428'],
    extraResources: 'http://eloquentjavascript.net'
  },
  {
    name: 'HTML & CSS',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6372', 'http://learn.ironhack.com/#/learning_unit/6373', 'http://learn.ironhack.com/#/learning_unit/6381', 'http://learn.ironhack.com/#/learning_unit/6380', 'http://learn.ironhack.com/#/learning_unit/6396', 'http://learn.ironhack.com/#/learning_unit/6388', 'http://learn.ironhack.com/#/learning_unit/6389', 'http://learn.ironhack.com/#/learning_unit/6397'],
    extraResources: ['http://thehtml5quiz.com', 'https://flukeout.github.io', 'https://flexboxfroggy.com/#es']
  },
  {
    name: 'GITHUB',
    leanings: ['http://learn.ironhack.com/#/learning_unit/6383', 'http://learn.ironhack.com/#/learning_unit/6444', 'http://learn.ironhack.com/#/learning_unit/6422', 'http://learn.ironhack.com/#/learning_unit/6506'],
    extraResources: ['']
  },
  {
    name: 'DOM',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6403', 'http://learn.ironhack.com/#/learning_unit/6404'],
    extraResources: ['']
  },
  {
    name: 'CANVAS',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6432', 'http://learn.ironhack.com/#/learning_unit/6433', 'http://learn.ironhack.com/#/learning_unit/6436', 'http://learn.ironhack.com/#/learning_unit/6435', 'http://learn.ironhack.com/#/learning_unit/6441'],
    extraResources: ['']
  },
  {
    name: 'BOOTSTRAP',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6411', 'http://learn.ironhack.com/#/learning_unit/6412'],
    extraResources: ['']
  },
  {
    name: 'MONGODB',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6470', 'http://learn.ironhack.com/#/learning_unit/6471', 'http://learn.ironhack.com/#/learning_unit/6473'],
    extraResources: ['']
  },
  {
    name: 'EXPRESS',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6474', 'http://learn.ironhack.com/#/learning_unit/6478', 'http://learn.ironhack.com/#/learning_unit/6479', 'http://learn.ironhack.com/#/learning_unit/6486', 'http://learn.ironhack.com/#/learning_unit/6487', 'http://learn.ironhack.com/#/learning_unit/6489', 'http://learn.ironhack.com/#/learning_unit/6524', 'http://learn.ironhack.com/#/learning_unit/6525'],
    extraResources: ['']
  },
  {
    name: 'MONGOOSE',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6481', 'http://learn.ironhack.com/#/learning_unit/6482', 'http://learn.ironhack.com/#/learning_unit/6490', 'http://learn.ironhack.com/#/learning_unit/6494', 'http://learn.ironhack.com/#/learning_unit/6495'],
    extraResources: ['']
  },
  {
    name: 'NODE.JS',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6497', 'http://learn.ironhack.com/#/learning_unit/6498'],
    extraResources: ['']
  },
  {
    name: 'PASSPORT',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6502', 'http://learn.ironhack.com/#/learning_unit/6503', 'https://github.com/Jossdz/Lesson-Passport-local-Mongoose', 'http://learn.ironhack.com/#/learning_unit/6505'],
    extraResources: ['https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize']
  },
  {
    name: 'AJAX',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6514', 'http://learn.ironhack.com/#/learning_unit/6517'],
    extraResources: ['']
  },
  {
    name: 'REACT',
    learnings: ['http://learn.ironhack.com/#/learning_unit/7685', 'http://learn.ironhack.com/#/learning_unit/7694', 'http://learn.ironhack.com/#/learning_unit/7695', 'http://learn.ironhack.com/#/learning_unit/7688', 'http://learn.ironhack.com/#/learning_unit/7689', 'http://learn.ironhack.com/#/learning_unit/7690', 'http://learn.ironhack.com/#/learning_unit/7691', 'http://learn.ironhack.com/#/learning_unit/7696', 'http://learn.ironhack.com/#/learning_unit/7705'],
    extraResources: ['']
  },
  {
    name: 'HEROKU',
    learnings: ['http://learn.ironhack.com/#/learning_unit/6520'],
    extraResources: ['']
  }
]

mongoose
.connect(process.env.DB, {useNewUrlParser: true})
.then(()=> {
  Email.create(emails)
  EduRes.create(eduRes)
  console.log('Your database is working!')
})
.catch(err => (console.log(err)))
// .then(()=> {
//   mongoose.connection.close()
// })
// .catch(err => console.log(err))

