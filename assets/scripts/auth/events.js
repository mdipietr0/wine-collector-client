'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignIn = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignUp = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.signUp(data)
    .then(function () {
      api.signIn(data)
        .then(ui.onSignInSuccess)
        .catch(ui.onSignInFailure)
    })
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
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onSignInNow = function (e) {
  ui.onSignInNow()
}

const onRegisterNow = function (e) {
  ui.onRegisterNow()
}

const onBtnChangePassword = function (e) {
  ui.onBtnChangePassword()
}

const addHandlers = function () {
  document.querySelector('#sign-in-now').addEventListener('click', onSignInNow)
  document.querySelector('#register-now').addEventListener('click', onRegisterNow)
  document.querySelector('#btn-change-password').addEventListener('click', onBtnChangePassword)
  document.querySelector('#change-password').addEventListener('submit', onChangePassword)
  document.querySelector('#sign-in').addEventListener('submit', onSignIn)
  document.querySelector('#sign-up').addEventListener('submit', onSignUp)
  document.querySelector('#sign-out').addEventListener('click', onSignOut)
}

module.exports = {
  addHandlers
}
