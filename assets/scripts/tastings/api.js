'use strict'

const {apiUrl} = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    method: 'GET',
    url: apiUrl + '/tastings',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    method: 'GET',
    url: apiUrl + '/tastings/' + id,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const create = function (data) {
  return $.ajax({
    data,
    method: 'POST',
    url: apiUrl + '/tastings',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const update = function (data) {
  return $.ajax({
    data,
    method: 'PATCH',
    url: apiUrl + '/tastings/' + data.id,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: apiUrl + '/tastings/' + id,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
