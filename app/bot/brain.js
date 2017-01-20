require('dotenv').config()
var weather = require('./action/weather')
var stock = require('./action/stock')

var Botkit = require('botkit')
var controller = Botkit.slackbot()

controller.spawn ({ 
  token: process.env.SLACK_TOKEN
}).startRTM()

controller.hears('weather', ['direct_message', 'direct_mention', 'mention', 'ambient'], function(bot, message) {
  bot.reply(message, 'Getting the weather...')
  weather.getWeather()
})

controller.hears('stock', ['direct_message', 'direct_mention', 'mention', 'ambient'], function(bot, message) {
  bot.reply(message, 'Getting the stock...')
  stock.getStock()
})