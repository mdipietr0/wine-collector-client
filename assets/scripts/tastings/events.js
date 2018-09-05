'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

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
  console.log(data.tasting.wine_id)
  api.create(data)
    .then(function () {
      $('#tastings-create').addClass('d-none')
      api.indexByWine(data.tasting.wine_id)
        .then(function (response) {
          ui.onShowAllTastingsSuccess(response)
        })
        .catch(function () {
          console.log('tastings api fail')
        })
      ui.onCreateTastingSuccess()
    })
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

const onNewTasting = function (e) {
  e.preventDefault()
  const wineId = $(e.target).parent().parent().attr('data-id')
  const userId = store.user.id
  const tastingParams = { wineId, userId }
  console.log(tastingParams)
  $('#tastings-create').removeClass('d-none')
  ui.newTasting(tastingParams)
}

$('#tastings-create').addClass('d-none')

const addHandlers = function () {
  $('#tastings-index').on('click', onShowAllTastings)
  $('#tastings-show').on('submit', onShowTasting)
  $('#container-tastings-create').on('submit', 'form', onCreateTasting)
  $('#tastings-update').on('submit', onUpdateTasting)
  $('#tastings-delete').on('submit', onDeleteTasting)
  $('#wine').on('click', 'button', onNewTasting)
}

module.exports = {
  addHandlers
}
