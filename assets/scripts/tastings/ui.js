'use strict'
const store = require('../store')
const showTastingsTemplate = require('../templates/tasting-listing.handlebars')
const showUserTastingsTemplate = require('../templates/tasting-listing-user.handlebars')
const createTastingTemplate = require('../templates/tasting-create.handlebars')
const updateTastingTemplate = require('../templates/tasting-update.handlebars')

// const showWineTemplate = require('../templates/tasting-listing-single.handlebars')

const onShowAllTastingsSuccess = function (response) {
  const allTastings = response.tastings
  console.log(allTastings)
  const userTastings = allTastings.filter(tasting => tasting.user.id === store.user.id)
  console.log(userTastings)
  const nonUserTastings = allTastings.filter(tasting => tasting.user.id !== store.user.id)

  const showTastingsHtml = showTastingsTemplate({ tastings: nonUserTastings })
  const showUserTastingsHtml = showUserTastingsTemplate({ tastings: userTastings })

  $('#container-tastings-index').html(showTastingsHtml)
  $('#container-tastings-index').append(showUserTastingsHtml)
  $('#container-tastings-index').removeClass('d-none')

  console.log('onShowAllTastingsSuccess')
}

const onShowAllTastingsFailure = function () {
  console.log('onShowAllWinesFailure')
}

const onShowTastingSuccess = function (response) {
  console.log(response)
  // let html = '<ul>'
  // html += '<li>' + response.name + '</li>'
  // html += '</ul>'
  $('#wines').addClass('d-none')
  // const showWineHtml = showWineTemplate({ wine: response })
  // $('#wine').html(showWineHtml)
  $('#wines-show input').val('')
}

const onShowTastingFailure = function () {
  let html = '<ul>'
  html += '<li>Wine does not exits or is not owned by current user.</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onShowWineFailure')
  $('#wines-show input').val('')
}

const onCreateTastingSuccess = function (response) {
  console.log(response)
  console.log('onCreateTastingSuccess')
  $('#tastings-create input').val('')
}

const onCreateTastingFailure = function () {
  let html = '<ul>'
  html += '<li>Wine creation failed.</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onCreateWineFailure')
  $('#wines-create input').val('')
}

const onUpdateTastingSuccess = function (response) {
  console.log('update response', response)
  console.log('onUpdateWineSuccess')
  $('#tastings-update').remove()
  $('#wines-update input').val('')
}

const onUpdateTastingFailure = function () {
  let html = '<ul>'
  html += '<li>Wine does not exits or is not owned by current user.</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onUpdateWineFailure')
  $('#wines-update input').val('')
}

const onDestroyTastingSuccess = function (response) {
  console.log(response)
  let html = '<ul>'
  html += '<li>Wine has been successfully deleted</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onDestroyWineSuccess')
  $('#wines-destroy input').val('')
}

const onDestroyTastingFailure = function () {
  let html = '<ul>'
  html += '<li>Wine does not exits or was not deleted successfully.</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onDestroyWineFailure')
  $('#wines-delete input').val('')
}

const newTasting = function (params) {
  console.log('new tasting')
  console.log(params)
  const createTastingHtml = createTastingTemplate(params)
  console.log(createTastingHtml)
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
