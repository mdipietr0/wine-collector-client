'use strict'

const showTastingsTemplate = require('../templates/tasting-listing.handlebars')
const createTastingTemplate = require('../templates/tasting-create.handlebars')

// const showWineTemplate = require('../templates/tasting-listing-single.handlebars')

const onShowAllTastingsSuccess = function (response) {
  console.log(response.tastings)
  const showTastingsHtml = showTastingsTemplate({ tastings: response.tastings })
  $('#container-tastings-index').html(showTastingsHtml)
  console.log('onShowAllTastingsSuccess')
}

const onShowAllWinesFailure = function () {
  console.log('onShowAllWinesFailure')
}

const onShowWineSuccess = function (response) {
  console.log(response)
  // let html = '<ul>'
  // html += '<li>' + response.name + '</li>'
  // html += '</ul>'
  $('#wines').addClass('d-none')
  // const showWineHtml = showWineTemplate({ wine: response })
  // $('#wine').html(showWineHtml)
  $('#wines-show input').val('')
}

const onShowWineFailure = function () {
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

const onCreateWineFailure = function () {
  let html = '<ul>'
  html += '<li>Wine creation failed.</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onCreateWineFailure')
  $('#wines-create input').val('')
}

const onUpdateWineSuccess = function (response) {
  console.log(response)
  let html = '<ul>'
  html += '<li>' + response.name + '</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onUpdateWineSuccess')
  $('#wines-update input').val('')
}

const onUpdateWineFailure = function () {
  let html = '<ul>'
  html += '<li>Wine does not exits or is not owned by current user.</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onUpdateWineFailure')
  $('#wines-update input').val('')
}

const onDestroyWineSuccess = function (response) {
  console.log(response)
  let html = '<ul>'
  html += '<li>Wine has been successfully deleted</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onDestroyWineSuccess')
  $('#wines-destroy input').val('')
}

const onDestroyWineFailure = function () {
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
  onShowAllWinesFailure,
  onShowWineSuccess,
  onShowWineFailure,
  onUpdateWineSuccess,
  onUpdateWineFailure,
  onDestroyWineSuccess,
  onDestroyWineFailure,
  onCreateTastingSuccess,
  onCreateWineFailure,
  newTasting
}
