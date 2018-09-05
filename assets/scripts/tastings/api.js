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

const indexByWine = function (wineId) {
  return $.ajax({
    method: 'GET',
    url: apiUrl + '/tastings?wine_id=' + wineId,
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
  console.log(data)
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
  console.log(data)
  return $.ajax({
    data,
    method: 'PATCH',
    url: apiUrl + '/tastings/' + data.tasting.id,
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
  indexByWine,
  show,
  create,
  update,
  destroy
}
