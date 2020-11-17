const Discord = require("discord.js");

module.exports = {
	name: 'liveonserrano',
	description: 'liveonserrano!',
	execute(message, args, bot) {
        message.delete()
        message.channel.send(`<@&777900178119458866> \n O ElSerrano esta agora em live na Twitch. Vao la dar o vosso apoio nao custa nada. \n https://twitch.tv/elserrano97 \n @everyone`)
    },
};