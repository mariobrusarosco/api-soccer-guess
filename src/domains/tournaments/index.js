const express = require('express')
const Router = express.Router()

// const { API_VERSION } = process.env
const { API_VERSION } = require('../../config')

console.log({ API_VERSION})
// Auth Middleware
// const authorization = require('../middlewares/authorization')

const tournaments = require('./api')

console.log(`${API_VERSION}/tournaments`)

Router.use(`${API_VERSION}/tournaments`, tournaments)

module.exports = Router
