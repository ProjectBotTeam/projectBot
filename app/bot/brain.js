require('dotenv').config()
var weather = require('./action/weather')
var stock = require('./action/stock')
var Botkit = require('botkit')
var cleverbot = require('cleverbot.io')

var controller = Botkit.slackbot()
cleverbot = new cleverbot(process.env.CLEVERBOT_USER, process.env.CLEVERBOT_TOKEN)

controller.spawn({
  token: process.env.SLACK_TOKEN
}).startRTM()

controller.hears('weather', ['direct_message', 'direct_mention', 'mention', 'ambient'], function (bot, message) {
  bot.reply(message, 'Getting the weather...', function () {
    weather.getData(message.text, function (results) {
      bot.reply(message, weather.getTemperature(results))
    })
  })
})

controller.hears('stock', ['direct_message', 'direct_mention', 'mention', 'ambient'], function (bot, message) {
  bot.reply(message, 'Getting the stock...')
  stock.getStock()
})

controller.hears('', ['direct_message', 'direct_mention'], function (bot, message) {
  cleverbot.ask(message.text, function (err, response) {
    if (!err) {
      bot.reply(message, response)
    } else {
      // Respond instead of erroring out with "Error, the reference "" does not exist"
      bot.reply(message, 'I don\'t know')
    }
  })
})

