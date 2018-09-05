'use strict'

const flash = function (success, msg) {
  console.log('flash')
  $('#auth-flash').removeClass()
  $('#auth-flash').text(msg)
  if (success) {
    $('#auth-flash').addClass('success')
  } else {
    $('#auth-flash').addClass('failure')
  }
  $('#auth-flash').show()
  setTimeout(function () {
    $('#auth-flash').hide()
  }, 3000)
}

module.exports = {
  flash
}
