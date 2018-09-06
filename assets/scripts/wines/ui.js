'use strict'

const showWinesTemplate = require('../templates/wine-listing.handlebars')
const showWineTemplate = require('../templates/wine-listing-single.handlebars')
const config = require('../config')
const {flash} = require('../templates/helpers/flash')

const onShowAllWinesSuccess = function (response) {
  response.wines = response.wines.map(wine => {
    if (wine.color === 'Rose') {
      wine.img = config.wineUrls.rose
    } else if (wine.color === 'White') {
      wine.img = config.wineUrls.white
    } else {
      wine.img = config.wineUrls.red
    }
    return wine
  })
  const showWinesHtml = showWinesTemplate({ wines: response.wines })
  $('#wines').html(showWinesHtml)
  $('#wines').removeClass('d-none')
}

const onShowAllWinesFailure = function () {
  flash(false, 'Show wines unsuccesful!')
}

const onShowWineSuccess = function (response) {
  const wine = response.wine
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
  flash(false, 'Show wine unsuccesful!')
}

const onCreateWineSuccess = function (response) {
  flash(true, 'Wine successfully created')
  $('#wines-create input').val('')
}

const onCreateWineFailure = function () {
  flash(false, 'Create wine unsuccessful')
  $('#wines-create input').val('')
}

const onUpdateWineSuccess = function (response) {
  flash(true, 'Wine successfully updated!')
  $('#wines-update input').val('')
}

const onUpdateWineFailure = function () {
  flash(false, 'Wine update unsuccessful!')
  $('#wines-update input').val('')
}

const onDestroyWineSuccess = function (response) {
  flash(true, 'Wine successfully deleted!')
  $('#wines-destroy input').val('')
}

const onDestroyWineFailure = function () {
  flash(false, 'Wine delete unsuccessful!')
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
