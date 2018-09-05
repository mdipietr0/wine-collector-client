'use strict'

const store = require('../store')
const {flash} = require('../templates/helpers/flash')

const onHome = function () {
  console.log('home')
  $('#container-change-password').addClass('d-none')
  $('#wines').addClass('d-none')
  $('#wine').addClass('d-none')
  $('#container-tastings-create').addClass('d-none')
  $('#container-tastings-index').addClass('d-none')
  $('#container-change-password').addClass('d-none')
  $('#container-wines-index').removeClass('d-none')
  $('#container-wines-index-buttons').removeClass('d-none')
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#sign-in input').val('')
  $('#container-sign-up-in').addClass('d-none')
  $('#navbar').removeClass('d-none')
  $('#wines-index').removeClass('d-none')
  $('#wines-index-red').removeClass('d-none')
  $('#wines-index-white').removeClass('d-none')
  $('#wines-index-rose').removeClass('d-none')
  $('#container-wines-index-buttons').removeClass('d-none')
  $('#container-wines-index').removeClass('d-none')
  $('#title').addClass('d-none')
  $('#container-wines-index').removeClass('d-none')
}

const onSignInFailure = function () {
  console.log('onSignInFailure')
  $('#sign-in input').val('')
  flash(false, 'Unable to Sign in!')
}

const onSignUpSuccess = function () {
  console.log('api.signUp success')
  $('#sign-up input').val('')
}

const onSignUpFailure = function () {
  console.log('api.signUp failure')
  flash(false, 'Unable to Sign up!')
}

const onChangePasswordSuccess = function () {
  console.log('api.changePassword success')
  $('#container-change-password').addClass('d-none')
  $('#change-password input').val('')
  flash(true, 'Password Changed!')
  $('#changePasswordModal').modal('hide')
}

const onChangePasswordFailure = function () {
  console.log('api.changePassword failure')
  $('#change-password input').val('')
  flash(false, 'Unable to Change Password!')
  $('#changePasswordModal').modal('hide')
}

const onSignOutSuccess = function () {
  console.log('api.signOut success')
  $('#container-sign-up-in').removeClass('d-none')
  $('#container-change-password').addClass('d-none')
  $('#navbar').addClass('d-none')
  $('#wines').addClass('d-none')
  $('#wine').addClass('d-none')
  $('#container-tastings-create').addClass('d-none')
  $('#container-tastings-index').addClass('d-none')
  $('#container-change-password').addClass('d-none')
  $('#container-wines-index').addClass('d-none')
  $('#title').removeClass('d-none')
}

const onSignOutFailure = function () {
  console.log('api.signOut success')
  $('#sign-out input').val('')
  flash(false, 'Unable to Sign out!')
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
  onHome,
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
