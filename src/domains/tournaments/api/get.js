// @ts-check
const express = require('express')
const Router = express.Router()

Router.get('/', async (req, res) => {
  res.status(200).send([{
    id: "4dfs3242",
    label: "World Cup 2022"
  },
  {
    id: "gf435",
    label: "Brasileirao 2022"
  }])
})


module.exports = Router
