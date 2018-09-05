'use strict'

const showWinesTemplate = require('../templates/wine-listing.handlebars')
const showWineTemplate = require('../templates/wine-listing-single.handlebars')
const config = require('../config')

const onShowAllWinesSuccess = function (response) {
  console.log('show all response')
  console.log(response.wines)
  // let html = '<ul>'
  // if (response.length > 0) {
  //   response.forEach(wine => {
  //     console.log(wine.name)
  //     html += '<li>' + wine.name + '</li>'
  //   })
  // }
  // html += '</ul>'
  response.wines = response.wines.map(wine => {
    if (wine.color === 'Rose') {
      wine.img = config.wineUrls.rose
    } else if (wine.color === 'White') {
      wine.img = config.wineUrls.white
    } else {
      wine.img = config.wineUrls.red
    }
    console.log(wine)
    return wine
  })

  const showWinesHtml = showWinesTemplate({ wines: response.wines })
  $('#wines').html(showWinesHtml)
  $('#wines').removeClass('d-none')
  console.log('onShowAllWinesSuccess')
}

const onShowAllWinesFailure = function () {
  console.log('onShowAllWinesFailure')
}

const onShowWineSuccess = function (response) {
  console.log('show response', response.wine)
  const wine = response.wine
  // let html = '<ul>'
  // html += '<li>' + response.name + '</li>'
  // html += '</ul>'
  $('#wines').addClass('d-none')
  if (wine.color === 'Rose') {
    wine.img = config.wineUrls.rose
  } else if (wine.color === 'White') {
    wine.img = config.wineUrls.white
  } else {
    wine.img = config.wineUrls.red
  }
  const showWineHtml = showWineTemplate({ wine: wine })
  $('#wine').html(showWineHtml)
  $('#wine').removeClass('d-none')
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

const onCreateWineSuccess = function (response) {
  console.log(response)
  let html = '<ul>'
  html += '<li>' + response.name + '</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onCreateWineSuccess')
  $('#wines-create input').val('')
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

$('#wines-index').addClass('d-none')
$('#wines-index-red').addClass('d-none')
$('#wines-index-white').addClass('d-none')
$('#wines-index-rose').addClass('d-none')
$('#container-wines-create').addClass('d-none')
$('#container-wines-update').addClass('d-none')
$('#container-wines-delete').addClass('d-none')
$('#container-wines-index').addClass('d-none')

module.exports = {
  onShowAllWinesSuccess,
  onShowAllWinesFailure,
  onShowWineSuccess,
  onShowWineFailure,
  onUpdateWineSuccess,
  onUpdateWineFailure,
  onDestroyWineSuccess,
  onDestroyWineFailure,
  onCreateWineSuccess,
  onCreateWineFailure
}
