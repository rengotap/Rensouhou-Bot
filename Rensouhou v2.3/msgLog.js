exports.run = (bot, message, Discord) => {
    if (message.guild.id !== "375471275583340547") return; // ignores any messages not on PCH
    if (message.channel.id === "561258440937177088") return; //log
    if (message.channel.id === "443775090228723730") return; //introductions
    if (message.channel.id === "420049125846024204") return; //server-suggestions
    if (message.channel.id === "420048577088192533") return; //board
    
    var Log = new Discord.RichEmbed() //copies the message into an embed and sends it to #log
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(message.content)
    .setTimestamp(new Date())
    .setFooter(message.channel.name)
    .setColor(0x00AE86)
    bot.channels.get("561258440937177088").send(Log) 
  }