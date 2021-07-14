const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TournamentSchema = new Schema({
  label: {
    type: String,
    required: [true, 'A tournament label is required']
  },
  flag: String
})

module.exports = TournamentSchema
