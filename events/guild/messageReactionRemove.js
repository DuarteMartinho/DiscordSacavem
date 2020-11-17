const Store = require('storage-to-json');
const Config = require('../../config.json');
let emojiRoleStore = new Store('roleReactions')

module.exports = async (client, reaction, user) => {
  let removeMemberRole = (emojiRoleMappings) => {
    if (emojiRoleMappings.hasOwnProperty(reaction.emoji.id)) {
      let role = reaction.message.guild.roles.cache.get(emojiRoleMappings[reaction.emoji.id]);
      let member = reaction.message.guild.members.cache.get(user.id);
      if (role && member) {
        member.roles.remove(role);
      }
    }
  }

  if (reaction.message.partial) {
    await reaction.message.fetch();
    let emojiRoleMappings = await emojiRoleStore.get(reaction.message.id);
    if (emojiRoleMappings) {
      client.cachedMessageReactions.set(reaction.message.id, emojiRoleMappings);
      removeMemberRole(emojiRoleMappings);
    }
  } else {
    let emojiRoleMappings = client.cachedMessageReactions.get(reaction.message.id);
    if (emojiRoleMappings) {
      removeMemberRole(emojiRoleMappings);
    }
  }
}