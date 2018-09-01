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

const onUpdateWine = function (e) {
  e.preventDefault()
  console.log('onUpdateWine')
  const data = getFormFields(e.target)
  console.log(data)
  api.update(data)
    .then(ui.onUpdateWineSuccess)
    .catch(ui.onUpdateWineFailure)
}

const addHandlers = function () {
  $('#wines-index').on('click', onShowAllWines)
  $('#wines-show').on('submit', onShowWine)
  $('#wines-update').on('submit', onUpdateWine)
}

module.exports = {
  addHandlers
}
