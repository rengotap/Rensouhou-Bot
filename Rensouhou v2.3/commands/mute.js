exports.run = (bot, message, args) => {
    let cornerOfShame = message.guild.roles.get("441964599491690506");
    let member = message.mentions.members.first();
    if(!message.member.roles.some(r=>["Administrator", "Developer", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    if(!member)
      return message.reply("Please mention a valid member of this server");
    message.delete()
    member.addRole(cornerOfShame).catch(console.error);
    message.reply(`${member.user} has been muted.`)
  }