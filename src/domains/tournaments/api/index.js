const express = require('express')
const Router = express.Router()
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
// const jwt = require('jsonwebtoken')
// const { fileLogger } = require('../../../utils/logger')

// Project's Config
// const { errorsMap, USER_COOKIE_NAME } = require('../../config')

// Models
const Tournament = require('../model')
// console.log({ Tournament })
// const Topic = require('../../models/Topic')

// MiddlewaresTokenExpiredError
// const authorization = require('../../middlewares/authorization')


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

Router.post('/', async (req, res) => {
  // const tournamentGivenData = req.body

  // console.log(req.body)

  if (!req.body) {
    res.status(400).send('empty body for a tournament post')
  }

  const newTournament = await new Tournament({ ...req.body })

  try{
    const insertionResult = await newTournament.save()

    res.status(200).send(insertionResult)
  }catch(error) {
    const errorMessage = error.code == 11000 ? "Mongo DB: duplicated key" : "Mongo DB error when trying to save()";

    res.status(500).send({...error, errorMessage })
  }
})

// Router.put('/', async (req, res) => {
//   const { id, updates } = req.body

//   const note = await Note.update(
//     { _id: id },
//     {
//       $set: {
//         description: 'Altered',
//         language: updates.language
//       }
//     },
//     { new: true }
//   )

//   res.send(note)
// })

module.exports = Router
