exports.run = (bot, message, args) => {
    if (message.author.id !== bot.config.ownerID) return;
    message.guild.createRole({
    name: 'DJ'
  });
    let DJ = message.guild.roles.find(role => role.name === "DJ");
    message.member.addRole(DJ).catch(console.error);
    message.delete();
  }