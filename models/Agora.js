const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const agoraSchema = new Schema({
  title: String,
  content: String,
  image: String
},
{
  timestamps: true,
  versionKey: false
}
)

module.exports = mongoose.model('Agora', agoraSchema)