// Importing the sensitive data that shouldn't reach github
var keys = require('./keys.json')

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// Variables used 
const key= "!!";
var magic8Ball = {};
  magic8Ball.listofanswers = [
    "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", 
    "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", 
    "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", 
    "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."
  ];


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready! With key == '+key );
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content.startsWith(key)) {

    // Checking exactly which command it is

    if(message.content.startsWith(key+"ask")){
      // Keeping the original message
      var msgCopy = message.content;

      //removing the key
      msgCopy = msgCopy.replace(key+"ask", "");
      magic8Ball.getAnswer(message, msgCopy);
    }else{
      // Send "pong" to the same channel
      message.channel.send('pong ' + message.author);
    }
    
  }
});

// Functions

// 
magic8Ball.getAnswer = function(message, question)
{
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];

    message.channel.send('The asnwer to the question: ' + question + ' \n Is: '+ answer);
};

// Log our bot in using the token
client.login(keys.token);