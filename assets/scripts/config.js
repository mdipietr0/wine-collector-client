'use strict'

let apiUrl
const apiUrls = {
  production: 'https://powerful-savannah-65213.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const wineUrls = {
  red: 'https://organicwineexchange.com/wp-content/uploads/2013/01/Square-Red-Wine-Bottle-.jpg',
  white: 'https://smartymockups.com/wp-content/uploads/2016/06/White_Wine_Bottle_Mockup_1ok.jpg',
  rose: 'http://www.provencewineusa.com/site/img/nothumb_label2.jpg'
}

module.exports = {
  apiUrl,
  wineUrls
}
