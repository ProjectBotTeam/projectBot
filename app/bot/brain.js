require('dotenv').config()
var weather = require('./action/weather')
var stock = require('./action/stock')

var Botkit = require('botkit')
var controller = Botkit.slackbot()

controller.spawn({
  token: process.env.SLACK_TOKEN
}).startRTM()

controller.hears('weather', ['direct_message', 'direct_mention', 'mention', 'ambient'], function (bot, message) {
  bot.reply(message, 'Getting the weather...', function () {
    var temperature = weather.getWeather("Weather for Orlando, FL")
    if(temperature != 'undefined') {
bot.reply(message, temperature)
    }
    else {
      bot.reply(message, 'There seems to be a problem. Try again a few seconds.')
    }
    
  })
})

controller.hears('stock', ['direct_message', 'direct_mention', 'mention', 'ambient'], function (bot, message) {
  bot.reply(message, 'Getting the stock...')
  stock.getStock()
})