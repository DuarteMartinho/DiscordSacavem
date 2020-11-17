const Discord = require("discord.js");

module.exports = {
	name: 'exampleembed',
	description: 'exampleembed!',
	execute(message, args, bot) {
        const embed = new Discord.MessageEmbed()
            
            .attachFiles(['./images/image.png'])
            .setThumbnail('attachment://image.png')
            .setAuthor(`exampleembed`)
            .setColor(0xF1890F)
            .setDescription(`exampleembed`)
            .setTimestamp()
            .setFooter('exampleembed', 'attachment://image.png');
        message.channel.send(embed)
        
    },
};