//bans a user
exports.run = (bot, message, args) => {
    if(!message.member.roles.some(r=>["Administrator","Developer"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldnt ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned for ${reason}`);
  }