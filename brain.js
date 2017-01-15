var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
 
});


controller.spawn ({
    //token: <slack token>,
    
    
}).startRTM()

controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function(bot,message) {
    bot.reply(message, 'Hi, need anything?');
});