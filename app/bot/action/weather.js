require('dotenv').config()
var http = require('http')
var exports = module.exports = {}
var link = 'http://api.wunderground.com/api/' + process.env.WUNDERGROUND_TOKEN + '/conditions/q/'
var locationPattern = '[a-zA-Z]+[,][\\s][a-zA-Z]+'
var cityState, city, state, weather

exports.getData = function (inputMessage, callback) {
  cityState = exports.getCityState(inputMessage)
  city = cityState[0]
  state = cityState[1].trim()
  var jsonFile = link + state + '/' + city + '.json'
  var request = http.get(jsonFile)
  var body = ''

  http.get(jsonFile, function (response) {
    response.on('data', function (chunk) {
      body += chunk
    })

    response.on('end', function () {
      callback(JSON.parse(body))
    })
  })
}

exports.getCityState = function (inputMessage) {
  var checkCityState = inputMessage.match(locationPattern)
  if (checkCityState) {
    return checkCityState[0].split(',')
  }
  else {
    // Set the city and state to none
    return ['none', 'none']
  }
}

exports.getTemperature = function (results) {
  if (city !== 'none') {
    weather = results.current_observation
    if (weather === undefined) {
      return ('I could not find anyting for your city and state. It might not exist.')
    }
    else {
      var temperature = weather.temperature_string
      var temperatureCity = weather.display_location.city
      var temperatureState = weather.display_location.state
      return ('The temperature is ' + temperature + ' in ' + temperatureCity + ', ' + temperatureState + '.')
    }
  }
  else {
    return ('Try asking again with the city and state. For example, what is the weather in Orlando, FL?')
  }
}