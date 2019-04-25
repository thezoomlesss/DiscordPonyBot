const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');
function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0]){
            play(connection, message);
        } else {
            connection.disconnect();
        }
    });
};

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
        if (message.member.voiceChannel) {
            if (!servers[message.guild.id]) {
                servers[message.guild.id] = { queue: [] };
            }
            if (!message.guild.voiceConnection) {
                var server = servers[message.guild.id];

                message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply("I joined!");
                        server.queue.push(args);
                        play(connection, message);
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