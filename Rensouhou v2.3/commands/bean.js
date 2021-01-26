//DMs a Green da Bean Meme
exports.run = (bot, message, args) => {
    if (message.author.id !== bot.config.ownerID) return;
    let member = message.mentions.members.first();
    member.send(`GET BEANED`,{
      file: "https://cdn.discordapp.com/attachments/315221002424549377/533440019092733952/hEkADo6.jpg"
    });
    member.send("https://www.youtube.com/watch?v=NI7L11tsB8o&feature=youtu.be&t=25");
  }