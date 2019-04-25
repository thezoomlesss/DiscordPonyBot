// Importing the sensitive data that shouldn't reach github
const commando = require('discord.js-commando');
const bot = new commando.Client();
const keys = require('./keys.json')
// const mongoose = require('mongoose');
const commands = require('./commands');


global.servers = {};

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
bot.on('ready', () => {


  console.log('Connecting to MongoDB');
  // mongoose.connect('mongodb://localhost/ponybotdb');
  
  console.log('Connected!');
});

// Create an event listener for messages
bot.on('message', function (message) {
  if (message.content == 'Hello') {
    // message.reply("Hello");
    if (!message.author.bot) message.channel.send("Hello");
  }
});

// Log our bot in using the token
bot.on('error', console.error);
bot.login(keys.token);