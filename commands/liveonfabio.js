const Discord = require("discord.js");

module.exports = {
	name: 'liveonfabio',
	description: 'liveonfabio!',
	execute(message, args, bot) {
        message.delete()
        message.channel.send(`<@&777918294761668628> \n O Fabio esta agora em live na Twitch. Vao la dar o vosso apoio nao custa nada. \n https://twitch.tv/fabiogarrido97 \n @everyone`)
        
    },
};