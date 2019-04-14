// Answers for 8Ball

var keys = require('./keys.json')
const key = keys.special_character;
listofanswers = [
    "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.",
    "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.",
    "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
    "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."
];

module.exports = {
    // foo: function (message) {
    //     message.channel.send("foo");
    // },
    magic8Ball: function (message) {
        var msgCopy = message.content;

        //removing the key
        msgCopy = msgCopy.replace(key + "ask", "");
        var randomNumber = Math.random();
        var randomAnswer = Math.floor(randomNumber * listofanswers.length);
        var answer = listofanswers[randomAnswer];

        message.channel.send('The asnwer to the question: ' + msgCopy + ' \n Is: ' + answer);
    }

};
