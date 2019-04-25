const commando = require('discord.js-commando');


class CreatePlaylistCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'create',
            group: 'music',
            memberName: 'create',
            description: 'Creates a playlist that you can add songs to'
        });
    }

    async run(message, args) {
        message.reply("YAY");
    }
}

module.exports = CreatePlaylistCommand;