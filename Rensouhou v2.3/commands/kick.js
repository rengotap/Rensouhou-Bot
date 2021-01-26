exports.run = (bot, message, args) => {
    message.delete()
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Developer"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldnt kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked for ${reason}`);
  }