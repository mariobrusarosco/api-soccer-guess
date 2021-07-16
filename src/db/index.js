const mongoose = require('mongoose')

const isLocalEnv = process.env.NODE_ENV === 'local'
const credentials = isLocalEnv
  ? 'mongodb://localhost/local-best-shot'
  : process.env.DB_CREDENTIALS


module.exports = () => {
  mongoose
    .connect(process.env.DB_CREDENTIALS, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to a mongo DB')
    })
    .catch(error => {
      console.error("bad connection")
      new Error({ type: 'Mongo connection error', message: error })
    })
}
