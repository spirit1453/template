
const express = require('express')

const app = express()

const users = require('./routes/users')

app.use(users)


module.exports = {
  path: '/api',
  handler: app
}
