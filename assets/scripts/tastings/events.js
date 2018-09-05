'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onShowAllTastings = function (e) {
  e.preventDefault()
  api.index()
    .then(ui.onShowAllTastingsSuccess)
    .catch(ui.onShowAllTastingsFailure)
}

const onShowTasting = function (e) {
  e.preventDefault()
  const id = getFormFields(e.target).id
  api.show(id)
    .then(ui.onShowTastingSuccess)
    .catch(ui.onShowTastingFailure)
}

const onCreateTasting = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.create(data)
    .then(ui.onCreateTastingSuccess)
    .catch(ui.onCreateTastingFailure)
}

const onUpdateTasting = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.update(data)
    .then(ui.onUpdateTastingSuccess)
    .catch(ui.onUpdateTastingFailure)
}

const onDeleteTasting = function (e) {
  e.preventDefault()
  const id = getFormFields(e.target).id
  api.destroy(id)
    .then(ui.onDestroyTastingSuccess)
    .catch(ui.onDestroyTastingFailure)
}

const addHandlers = function () {
  $('#tastings-index').on('click', onShowAllTastings)
  $('#tastings-show').on('submit', onShowTasting)
  $('#tastings-create').on('submit', onCreateTasting)
  $('#tastings-update').on('submit', onUpdateTasting)
  $('#tastings-delete').on('submit', onDeleteTasting)
}

module.exports = {
  addHandlers
}
