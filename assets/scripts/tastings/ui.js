'use strict'
const store = require('../store')
const {flash} = require('../templates/helpers/flash')
const showTastingsTemplate = require('../templates/tasting-listing.handlebars')
const showUserTastingsTemplate = require('../templates/tasting-listing-user.handlebars')
const createTastingTemplate = require('../templates/tasting-create.handlebars')
const updateTastingTemplate = require('../templates/tasting-update.handlebars')

// const showWineTemplate = require('../templates/tasting-listing-single.handlebars')

const onShowAllTastingsSuccess = function (response) {
  const allTastings = response.tastings
  const userTastings = allTastings.filter(tasting => tasting.user.id === store.user.id)
  const nonUserTastings = allTastings.filter(tasting => tasting.user.id !== store.user.id)
  const showTastingsHtml = showTastingsTemplate({ tastings: nonUserTastings })
  const showUserTastingsHtml = showUserTastingsTemplate({ tastings: userTastings })
  $('#container-tastings-index').html(showTastingsHtml)
  $('#container-tastings-index').append(showUserTastingsHtml)
  $('#container-tastings-index').removeClass('d-none')
}

const onShowAllTastingsFailure = function () {
  flash(false, 'Unexpected error!')
}

const onShowTastingSuccess = function (response) {
  $('#wines').addClass('d-none')
  $('#wines-show input').val('')
}

const onShowTastingFailure = function () {
  flash(false, 'Can not show tasting!')
}

const onCreateTastingSuccess = function (response) {
  $('#tastings-create input').val('')
}

const onCreateTastingFailure = function () {
  flash(false, 'Can not create tasting!')
  $('#wines-create input').val('')
}

const onUpdateTastingSuccess = function (response) {
  $('#tastings-update').remove()
  $('#wines-update input').val('')
}

const onUpdateTastingFailure = function () {
  flash(false, 'Can not update tasting!')
  $('#wines-update input').val('')
}

const onDestroyTastingSuccess = function (response) {
  flash(true, 'Tasting successfully deleted!')
}

const onDestroyTastingFailure = function () {
  flash(false, 'Deleted unsuccessful!')
}

const newTasting = function (params) {
  const createTastingHtml = createTastingTemplate(params)
  $('#container-tastings-create').html(createTastingHtml)
  $('#container-tastings-create').removeClass('d-none')
}

const editTasting = function (tastingEl, tasting) {
  const updateTastingHtml = updateTastingTemplate(tasting)
  tastingEl.append(updateTastingHtml)
}

$('#wines-index').addClass('d-none')
$('#wines-index-red').addClass('d-none')
$('#wines-index-white').addClass('d-none')
$('#wines-index-rose').addClass('d-none')
$('#container-wines-create').addClass('d-none')
$('#container-wines-update').addClass('d-none')
$('#container-wines-delete').addClass('d-none')

module.exports = {
  onShowAllTastingsSuccess,
  onShowAllTastingsFailure,
  onShowTastingSuccess,
  onShowTastingFailure,
  onUpdateTastingFailure,
  onUpdateTastingSuccess,
  onDestroyTastingSuccess,
  onDestroyTastingFailure,
  onCreateTastingSuccess,
  onCreateTastingFailure,
  newTasting,
  editTasting
}
