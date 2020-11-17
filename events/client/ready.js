const Config = require('../../config.json');

module.exports = (bot) => {
    console.log(
        `${bot.user.username} -> online: ${new Date().toString().slice(4, 24)}`
    );
};
