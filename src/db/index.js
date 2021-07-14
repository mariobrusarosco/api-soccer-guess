const mongoose = require('mongoose')

const isLocalEnv = process.env.NODE_ENV === 'local'
const credentials = isLocalEnv
  ? 'mongodb://localhost/local-best-shot'
  : process.env.DB_CREDENTIALS


module.exports = () => {
  mongoose
    .connect(credentials, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to a mongo DB')
    })
    .catch(error => {
      console.error("bad connection")
      new Error({ type: 'Mongo connection error', message: error })
    })
}
