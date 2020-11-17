const fs = require('fs');
const Client = require("discord.js");
const { MessageEmbed } = require('discord.js');

const bot = new Client.Client();
bot.commands = new Client.Collection();

const Config = require('./config.json');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

["event"].forEach(x => require(`./handlers/${x}`)(bot));


bot.prefix = Config.prefix;


bot.on('message', message => {
	if (!message.content.startsWith(bot.prefix) || message.author.bot) return;

	const args = message.content.slice(bot.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

bot.login(Config.token);