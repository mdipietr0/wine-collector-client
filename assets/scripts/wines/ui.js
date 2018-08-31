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

module.exports = {
  onShowAllWinesSuccess,
  onShowAllWinesFailure
}
