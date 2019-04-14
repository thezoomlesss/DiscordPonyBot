// Importing the sensitive data that shouldn't reach github
const commando = require('discord.js-commando');
const bot = new commando.Client();
const keys = require('./keys.json')
const mysql = require('mysql');
const commands = require('./commands');
// var FFMPEG = require('ffmpeg');

var connection = mysql.createConnection({
  // properties
  'host': keys.host,
  'user': keys.user,
  'password': keys.password,
  'database': keys.database,
  'connectionLimit': 100,
  'port': 3306,
  'debug': false,
  'multipleStatements': true
});


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
bot.on('ready', () => {
  
  connection.connect(function (error) {
    // callback
    if (!!error) {
      console.log('Error when connecting to the database from PonyBot');

      console.log(error);
    } else {
      console.log('Db connected from PonyBot!');
    }
  });
});

// Create an event listener for messages
bot.on('message', function (message) {
  if (message.content == 'Hello') {
    // message.reply("Hello");
    if (!message.author.bot) message.channel.send("Hello");
  }
});

// Log our bot in using the token
bot.login(keys.token);