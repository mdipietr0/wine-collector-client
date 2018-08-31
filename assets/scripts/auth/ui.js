'use strict'

const store = require('../store')

const onSignInSuccess = function (response) {
  storeUser(response.user)
}

const onSignInFailure = function () {
  console.log('onSignInFailure')
}

const onSignUpSuccess = function () {
  console.log('api.signUp success')
}

const onSignUpFailure = function () {
  console.log('api.signUp failure')
}

const onChangePasswordSuccess = function () {
  console.log('api.changePassword success')
}

const onChangePasswordFailure = function () {
  console.log('api.changePassword failure')
}

const onSignOutSuccess = function () {
  console.log('api.signOut success')
}

const onSignOutFailure = function () {
  console.log('api.signOut success')
}

const storeUser = function (user) {
  store.user = user
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
