const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const emailSchema = new Schema({
  email: String
})

module.exports = mongoose.model('Emails', emailSchema)