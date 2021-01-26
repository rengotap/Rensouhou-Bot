module.exports = (bot, member, Discord) => {
    member.guild.channels.get("404785029147918346").send(`${member.user} has left the server.`);
  }