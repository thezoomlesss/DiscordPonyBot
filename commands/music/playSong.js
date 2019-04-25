const commando = require('discord.js-commando');

class PlaySongCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Creates a playlist that you can add songs to'
        });
    }

    async run(message, args) {
        message.reply("YAY");
    }
}

module.exports = PlaySongCommand;