require('dotenv').config()

var exports = module.exports = {}
var link = 'http://api.wunderground.com/api/' + process.env.WUNDERGROUND_TOKEN + '/conditions/q/'
var locationPattern = '((\sfor\s)|(\sin\s))([a-zA-Z]+[\s]|[a-zA-Z])+[,][\s][a-zA-Z]+'
var jsonFile, city, state

exports.getCityState = function(inputMessage) {
  // TODO Get the city and state from the input message.
  //console.log('CHECKING...')
  //console.log(inputMessage.match(locationPattern))
}

exports.getWeather = function(inputMessage) {
    // Get city and state
    jsonFile = link + state + '/' + city + '.json'
    console.log("The weather is 110 degrees!")
    console.log(jsonFile)
}

