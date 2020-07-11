const mongoose = require('mongoose')
const Reserchers = mongoose.Schema

const resercherSchema = new Reserchers({
  name: {
    type: String,
    required: true
  },
  school: {
    type: String,
    default: ''
  },
  user: {
    ref: 'users',
    type: Reserchers.Types.ObjectId
  }
})

module.exports = mongoose.model('reserchers', resercherSchema)