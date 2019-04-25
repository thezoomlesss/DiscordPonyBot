const commando = require('discord.js-commando');
var clientInClass = '';

class LeaveChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves a voice channel when requested'
        });
        clientInClass = client;
    }

    async run(message, args) {
        if (message.member.voiceChannel) {
            if (message.guild.voiceConnection) {
                message.member.voiceChannel.leave()
                message.reply("See you later!");
            } else {
                message.reply("I can't leave a voice channel if I'm not in one, silly!");
            }
        } else {
            message.reply("You must be in a voice channel!")
        }
    }
}

module.exports = LeaveChannelCommand;