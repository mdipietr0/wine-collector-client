'use strict'

const api = require('./api')
const ui = require('./ui')

const onShowAllWines = function (e) {
  e.preventDefault()
  console.log('onShowAllWines')
  api.index()
    .then(ui.onShowAllWinesSuccess)
    .catch(ui.onShowAllWinesFailure)
}

const addHandlers = function () {
  document.querySelector('#wines-index')
    .addEventListener('click', onShowAllWines)
  console.log('success')
}

module.exports = {
  addHandlers
}
