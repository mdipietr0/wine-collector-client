'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onShowAllWines = function (e) {
  e.preventDefault()
  console.log('onShowAllWines')
  api.index()
    .then(ui.onShowAllWinesSuccess)
    .catch(ui.onShowAllWinesFailure)
}

const onShowWine = function (e) {
  e.preventDefault()
  console.log('onShowWine')
  const id = getFormFields(e.target).id
  console.log(id)
  api.show(id)
    .then(ui.onShowWineSuccess)
    .catch(ui.onShowWineFailure)
}

const addHandlers = function () {
  $('#wines-index').on('click', onShowAllWines)
  $('#wines-show').on('submit', onShowWine)
}

module.exports = {
  addHandlers
}
