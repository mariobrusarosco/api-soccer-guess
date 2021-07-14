const mongoose = require('mongoose')
const schema = require("./schema")

const Tournament = mongoose.model("Tournament", schema)

module.exports = Tournament
