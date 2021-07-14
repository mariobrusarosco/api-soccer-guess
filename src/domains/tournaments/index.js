const express = require('express')
const Router = express.Router()

const { API_VERSION } = process.env

// Auth Middleware
// const authorization = require('../middlewares/authorization')

const tournaments = require('./api')

Router.use(`${API_VERSION}/tournaments`, tournaments)

module.exports = Router
