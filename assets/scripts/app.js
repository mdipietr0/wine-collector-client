'use strict'

const wines = require('./wines/events')
const auth = require('./auth/events')
const tastings = require('./tastings/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  tastings.addHandlers()
  auth.addHandlers()
  wines.addHandlers()
})
