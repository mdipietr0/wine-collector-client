'use strict'

const store = require('../store')
const {apiUrl} = require('../config')

const signUp = function (data) {
  return $.ajax({
    data,
    method: 'POST',
    url: apiUrl + '/sign-up'
  })
}

const signIn = function (data) {
  return $.ajax({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    data: data,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePassword
}
