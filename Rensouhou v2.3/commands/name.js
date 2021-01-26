exports.run = (bot, message, args) => {
    if (message.channel.id !== "443775090228723730") return; //if not in #introductions ignore
    let newName = message.content.slice(6);
    let userToModify = message.member;
    message.guild.members.get(message.author.id).setNickname(newName);
    userToModify.removeRole("443775161301467136"); // remove role[unassigned]
  }