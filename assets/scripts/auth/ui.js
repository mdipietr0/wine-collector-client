'use strict'

const store = require('../store')

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#sign-in input').val('')
  $('#container-sign-up-in').addClass('d-none')
  $('#navbar').removeClass('d-none')
  $('#wines-index').removeClass('d-none')
  $('#wines-index-red').removeClass('d-none')
  $('#wines-index-white').removeClass('d-none')
  $('#wines-index-rose').removeClass('d-none')
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
  $('#container-change-password').addClass('d-none')
  $('#change-password input').val('')
}

const onChangePasswordFailure = function () {
  console.log('api.changePassword failure')
  $('#change-password input').val('')
}

const onSignOutSuccess = function () {
  console.log('api.signOut success')
  $('#container-sign-up-in').removeClass('d-none')
  $('#container-change-password').addClass('d-none')
  $('#navbar').addClass('d-none')
}

const onSignOutFailure = function () {
  console.log('api.signOut success')
  $('#sign-out input').val('')
}

const onSignInNow = function () {
  $('#container-sign-in').removeClass('d-none')
  $('#container-sign-up').addClass('d-none')
}

const onRegisterNow = function () {
  $('#container-sign-in').addClass('d-none')
  $('#container-sign-up').removeClass('d-none')
}

const onBtnChangePassword = function () {
  $('#container-change-password').removeClass('d-none')
}

$('#container-sign-up').addClass('d-none')
$('#container-change-password').addClass('d-none')
$('#navbar').addClass('d-none')

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onSignInNow,
  onRegisterNow,
  onBtnChangePassword
}
