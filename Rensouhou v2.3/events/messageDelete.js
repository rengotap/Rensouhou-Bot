module.exports = (bot, message, Discord) => {
   
    if (message.guild.id !== "375471275583340547") return;
    if ((message.author.id !== bot.config.ownerID) && (message.content.includes(">say"))) return;
    var delLog = new Discord.RichEmbed()
    .setTitle("*Deleted Message*")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(message.content)
    .setTimestamp(new Date())
    .setFooter(message.channel.name)
    .setColor(0xdf1515)
    bot.channels.get("561258440937177088").send(delLog)
  }