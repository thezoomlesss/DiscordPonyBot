const commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins a voice channel when requested'
        });
    }

    async run(message, args) {
        if(message.member.voiceChannel){
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.reply("I joined!");
                    });

            } else {
                message.reply("I can't be in two places at once! :upside_down: ");
            }
        } else {
            message.reply("You must be in a voice channel!")
        }
    }
}

module.exports = JoinChannelCommand;