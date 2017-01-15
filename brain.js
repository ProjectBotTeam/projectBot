var Botkit = require('botkit');
require('dotenv').config()


var controller = Botkit.slackbot({
  debug: true
 
});


controller.spawn ({
    
    token: process.env.SLACK_TOKEN

    
    
}).startRTM()

controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function(bot,message) {
    bot.reply(message, 'Hi, need anything?');
});