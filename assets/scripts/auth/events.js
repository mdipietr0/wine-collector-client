'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignIn = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.signIn(data)
    .then(ui.OnSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignUp = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpSuccess)
}

const onChangePassword = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (e) {
  e.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const addHandlers = function () {
  document.querySelector('#sign-in').addEventListener('submit', onSignIn)
  document.querySelector('#sign-up').addEventListener('submit', onSignUp)
  document.querySelector('#sign-out').addEventListener('submit', onSignOut)
  document.querySelector('#change-password').addEventListener('submit', onChangePassword)
}
module.exports = {
  addHandlers
}
