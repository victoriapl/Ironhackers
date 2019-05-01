const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const {ObjectId} = Schema.Types

const agoraSchema = new Schema({
  userId: {
    type: ObjectId,
    ref: 'User'
  },
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