'use strict'

const onShowAllWinesSuccess = function (response) {
  console.log(response)
  let html = '<ul>'
  response.forEach(wine => {
    console.log(wine.name)
    html += '<li>' + wine.name + '</li>'
  })
  html += '</ul>'
  $('#wines').html(html)
  console.log('onShowAllWinesSuccess')
}

const onShowAllWinesFailure = function () {
  console.log('onShowAllWinesFailure')
}

const onShowWineSuccess = function (response) {
  console.log(response)
  let html = '<ul>'
  html += '<li>' + response.name + '</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onShowWineSuccess')
}

const onShowWineFailure = function () {
  let html = '<ul>'
  html += '<li>Wine does not exits or is not owned by current user.</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onShowWineFailure')
}

const onUpdateWineSuccess = function (response) {
  console.log(response)
  let html = '<ul>'
  html += '<li>' + response.name + '</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onUpdateWineSuccess')
}

const onUpdateWineFailure = function () {
  let html = '<ul>'
  html += '<li>Wine does not exits or is not owned by current user.</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onUpdateWineFailure')
}

const onDestroyWineSuccess = function (response) {
  console.log(response)
  let html = '<ul>'
  html += '<li>Wine has been successfully deleted</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onDestroyWineSuccess')
}

const onDestroyWineFailure = function () {
  let html = '<ul>'
  html += '<li>Wine does not exits or was not deleted successfully.</li>'
  html += '</ul>'
  $('#wines').html(html)
  console.log('onDestroyWineFailure')
}

module.exports = {
  onShowAllWinesSuccess,
  onShowAllWinesFailure,
  onShowWineSuccess,
  onShowWineFailure,
  onUpdateWineSuccess,
  onUpdateWineFailure,
  onDestroyWineSuccess,
  onDestroyWineFailure
}
