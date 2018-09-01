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

const indexByColor = function (color) {
  return $.ajax({
    method: 'GET',
    url: apiUrl + '/wines?color=' + color,
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

const create = function (data) {
  return $.ajax({
    data,
    method: 'POST',
    url: apiUrl + '/wines',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const update = function (data) {
  return $.ajax({
    data,
    method: 'PATCH',
    url: apiUrl + '/wines/' + data.id,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: apiUrl + '/wines/' + id,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  indexByColor,
  show,
  create,
  update,
  destroy
}
