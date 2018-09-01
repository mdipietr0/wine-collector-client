'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onShowAllWines = function (e) {
  e.preventDefault()
  api.index()
    .then(ui.onShowAllWinesSuccess)
    .catch(ui.onShowAllWinesFailure)
}

const onShowWinesByColor = function (e) {
  e.preventDefault()
  const color = getFormFields(e.target).color
  console.log(color)
  api.indexByColor(color)
    .then(ui.onShowAllWinesSuccess)
    .catch(ui.onShowAllWinesFailure)
}

const onShowWine = function (e) {
  e.preventDefault()
  const id = getFormFields(e.target).id
  api.show(id)
    .then(ui.onShowWineSuccess)
    .catch(ui.onShowWineFailure)
}

const onCreateWine = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.create(data)
    .then(ui.onCreateWineSuccess)
    .catch(ui.onCreateWineFailure)
}

const onUpdateWine = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.update(data)
    .then(ui.onUpdateWineSuccess)
    .catch(ui.onUpdateWineFailure)
}

const onDeleteWine = function (e) {
  e.preventDefault()
  const id = getFormFields(e.target).id
  api.destroy(id)
    .then(ui.onDestroyWineSuccess)
    .catch(ui.onDestroyWineFailure)
}

const addHandlers = function () {
  $('#wines-index').on('click', onShowAllWines)
  $('#wines-index-red').on('submit', onShowWinesByColor)
  $('#wines-index-white').on('submit', onShowWinesByColor)
  $('#wines-index-rose').on('submit', onShowWinesByColor)
  $('#wines-show').on('submit', onShowWine)
  $('#wines-create').on('submit', onCreateWine)
  $('#wines-update').on('submit', onUpdateWine)
  $('#wines-delete').on('submit', onDeleteWine)
}

module.exports = {
  addHandlers
}
