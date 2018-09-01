'use strict'

const store = require('../store')

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#sign-in input').val('')
}

const onSignInFailure = function () {
  console.log('onSignInFailure')
  $('#sign-in input').val('')
}

const onSignUpSuccess = function () {
  console.log('api.signUp success')
  $('#sign-up input').val('')
}

const onSignUpFailure = function () {
  console.log('api.signUp failure')
  $('#sign-up input').val('')
}

const onChangePasswordSuccess = function () {
  console.log('api.changePassword success')
  $('#change-password input').val('')
}

const onChangePasswordFailure = function () {
  console.log('api.changePassword failure')
  $('#change-password input').val('')
}

const onSignOutSuccess = function () {
  console.log('api.signOut success')
  $('#sign-out input').val('')
}

const onSignOutFailure = function () {
  console.log('api.signOut success')
  $('#sign-out input').val('')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
