'use strict'

const onShowAllWinesSuccess = function (response) {
  console.log(response)
  let html = '<ul>'
  if (response.length > 0) {
    response.forEach(wine => {
      console.log(wine.name)
      html += '<li>' + wine.name + '</li>'
    })
  }
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
