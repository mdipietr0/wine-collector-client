'use strict'

const {apiUrl} = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    method: 'GET',
    url: apiUrl + '/wines',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    method: 'GET',
    url: apiUrl + '/wines/' + id,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  show
}
