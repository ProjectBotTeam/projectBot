require('dotenv').config()
var http = require('http')
var exports = module.exports = {}
var link = 'http://api.wunderground.com/api/' + process.env.WUNDERGROUND_TOKEN + '/conditions/q/'
var locationPattern = '[a-zA-Z]+[,][\\s][a-zA-Z]+'
var jsonFile, cityState, city, state, temperature

exports.getWeather = function (inputMessage) {
  cityState = exports.getCityState(inputMessage)
  city = cityState[0]
  state = cityState[1].trim()
  jsonFile = link + state + '/' + city + '.json'
  exports.getJSON(jsonFile)
  return ('The temperature is ' + temperature + ' in ' + city + ', ' + state)
}

exports.getCityState = function (inputMessage) {
  return (inputMessage.match(locationPattern)[0]).split(',')
}

exports.getJSON = function (inputJSONFile) {
  var request = http.get(inputJSONFile, function (response) {
    var body = ''
    var getTemperature = ''

    response.on('data', function (chunk) {
      body += chunk
    })
    response.on('end', function () {
      getTemperature = JSON.parse(body)
      temperature = getTemperature.current_observation.temperature_string
    })
    request.on('error', function (error) {
      console.error(error.message)
    })
  })
}

