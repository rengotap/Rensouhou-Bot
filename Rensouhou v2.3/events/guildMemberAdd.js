module.exports = (bot, member, Discord) => {
    member.guild.channels.get("375471808633110529").send(`Welcome to the Peachtree FRC Discord ${member.user}! Please check #introductions to get started!`);
    //member.guild.channels.get("404785029147918346").send(`${member.user} has joined the server, please assign their respective roles.`);
    const unassigned = member.guild.roles.get("443775161301467136");
    member.addRole(unassigned).catch(console.error);
    member.guild.channels.get("443775090228723730").send(`Hello ${member.user}! Before I grant you access to everything PCH has to offer please enter your team number using **>team [teamNumber]** (Ex: >team 9999)`);
   
  }