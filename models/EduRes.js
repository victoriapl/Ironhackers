const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const eduResSchema = new Schema({
  name: String,
  learnings: [String],
  extraResources: [String]
})

module.exports = mongoose.model('EduRes', eduResSchema)