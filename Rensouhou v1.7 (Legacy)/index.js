const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var bot = new Discord.Client();

bot.on("ready", () =>{
	console.log("Rensouhou has logged in");
  bot.user.setActivity("I AM ALIVE");
});

bot.on("guildMemberRemove", (member) => {
  member.guild.channels.get("404785029147918346").send(`${member.user} has left the server.`);
});

bot.on("guildMemberAdd", (member) => {
  member.guild.channels.get("375471808633110529").send(`Welcome to the Peachtree FRC Discord ${member.user}! Please check #introductions to get started!`);
  member.guild.channels.get("404785029147918346").send(`${member.user} has joined the server, please assign their respective roles.`);
  let unassigned = member.guild.roles.get("443775161301467136");
  let newMember = member;
  newMember.addRole(unassigned).catch(console.error);
  member.guild.channels.get("443775090228723730").send(`Hello ${member.user}! Before I grant you access to everything PCH has to offer please select your region.`,{
  file: "https://cdn.discordapp.com/attachments/404785029147918346/434334653311090698/unknown.png"
  })
  .then(function (message) {
  var regionSelectScreen = new Discord.RichEmbed()
    .setTitle("Select your region based on the map provided.")
    .addField("West Region - WA", "Type: >region west", true)
    .addField("North Region - IA", "Type: >region north", true)
    .addField("South Region - GA", "Type: >region south", true)
    .addField("East Region - PA", "Type: >region west", true)
    .addField("Outside US- OUS", "Type: >region outside us", true)
    .addBlankField(true)
    .setColor(0x00AE86)
  member.guild.channels.get("443775090228723730").send(regionSelectScreen)
  });
});
//board
bot.on("messageReactionAdd", (reaction, user) =>{
  if (reaction.emoji.name !== '💠') return;
  if (reaction.message.channel.id === "420048577088192533") return;
  if (reaction.message.channel.id === "420049686691315712") return;
  if (reaction.message.channel.id === "442122709887877120") return;
  if (reaction.count === 3) {
    const boardMSG = new Discord.RichEmbed()
    .setAuthor(reaction.message.author.username, reaction.message.author.avatarURL)
    .setDescription (reaction.message.content)
    .setTimestamp(new Date())
    .setFooter(reaction.message.channel.name)
    .setColor(0x00AE86)
    bot.channels.get("420048577088192533").send(boardMSG)
  }
});
//#introductions functions
bot.on("message", message => {
  const inroductions = "443775090228723730";
  if (message.channel.id !== inroductions) return; //locks channel to #introductions
  
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "region") {
    let userToModify = message.member;
    let regionSelect = message.content.slice(8);
    if (regionSelect === "south") {
      userToModify.addRole("443781757075062784");
      message.channel.send("Region added.");
      message.channel.send(`Now just type >name [First Name | Team Number] to gain access to the rest of the server!(No Brackets)`);
    }
    if (regionSelect === "west") {
      userToModify.addRole("443781819276591144");
      message.channel.send("Region added.");
      message.channel.send(`Now just type >name [First Name | Team Number] to gain access to the rest of the server!(No Brackets)`);
    }
    if (regionSelect === "north") {
      userToModify.addRole("443781821961076736");
      message.channel.send("Region added.");
      message.channel.send(`Now just type >name [First Name | Team Number] to gain access to the rest of the server!(No Brackets)`);
    }
    if (regionSelect === "east") {
      userToModify.addRole("443782314686808075");
      message.channel.send("Region added.");
      message.channel.send(`Now just type >name [First Name | Team Number] to gain access to the rest of the server!(No Brackets)`);
    }
    if (regionSelect === "outside us") {
      userToModify.addRole("443787761699520542");
      message.channel.send("Region added.");
      message.channel.send(`Now just type >name [First Name | Team Number] to gain access to the rest of the server!`);
    }
  }
  if (command === "name") {
    let newName = message.content.slice(6);
    let userToModify = message.member;
    message.guild.members.get(message.author.id).setNickname(newName);
    userToModify.removeRole("443775161301467136");
  }
});
//records all sent messages
bot.on("message", message =>{
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
});
//records deleted messages
bot.on("messageDelete", message =>{
  if (message.guild.id !== "375471275583340547") return;
  if ((message.author.id !== config.ownerID) && (message.content.includes(">say"))) return;
  var delLog = new Discord.RichEmbed()
  .setTitle("*Deleted Message*")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(message.content)
  .setTimestamp(new Date())
  .setFooter(message.channel.name)
  .setColor(0xdf1515)
  bot.channels.get("561258440937177088").send(delLog)
}); 

bot.on("message", message => {
  let msg = message.content.toLowerCase();
  if (msg.includes("turt") == true) {
      message.react("448278282371334145");
      };
  if (msg.includes("discord.gg") == true) {
      message.delete()
      message.channel.send("Please don't advertise on PCH.")
      .then(function (message) {
      message.react("560653521238622209")
      });
      };
  if (msg.includes(":gw")){
    message.delete()
  }
});

bot.on("message", message => {
	if (message.author.equals(bot.user)) return;

	if (!message.content.startsWith(config.prefix)) return;

	let command = message.content.split(" ")[0];
	command = command.slice(config.prefix.length);

	let args = message.content.split(" ").slice(1);

	if (command === "ping") {
    	message.channel.send("Please Wait...").then((msg) => {
      		msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    	});
	}

	if (command === "say"){
		if (message.author.id !== config.ownerID) return;
		message.delete()
		message.channel.send(args.join(' '));
	}

	if (command === "suggest") {
    let botSpam = "420055537795989504";
    if (message.channel.id !== botSpam) return;
		let applicant = message.author.username;
		let idea = message.content;
		idea = idea.slice(command.length + 1);
		var suggestion = new Discord.RichEmbed()
    .setAuthor(applicant, message.author.avatarURL)
		.setDescription(idea)
    .setTimestamp(new Date())
    .setColor(0x00AE86)
		bot.channels.get("420049125846024204").send(suggestion)
    .then(function (message) {
		  message.react("433852654054014976")
  		message.react("433852666293256193")
  		.catch(() => console.error("Emote failed to react."));
    });
	}
  
	if (command === "complain") {
    let botSpam = "420055537795989504";
    if (message.channel.id !== botSpam) return;
		let applicant = message.author.username;
		let idea = message.content;
		idea = idea.slice(command.length + 1);
		var complaint = new Discord.RichEmbed()
    .setAuthor(applicant, message.author.avatarURL)
		.setDescription(idea)
    .setColor(0x00AE86)
    .setTimestamp(new Date())
		bot.channels.get("453179021069516800").send(complaint);
  }


  if (command ==="quickpoll") {
    message.delete()
    let pollTopic = message.content;
    pollTopic = pollTopic.slice(command.length + 1);
    var poll = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(pollTopic)
    .setColor(0x00AE86)
    message.channel.send(poll)
    .then(function (message) {
      message.react("433852654054014976")
      .then(function (react) {
        message.react("433852666293256193")
      });
    });
  }

  if (command === "rate") {
    let rateResult = Math.floor((Math.random() * 10) + 1);
    let rateSubject = message.content
    rateSubject = rateSubject.slice(command.length + 1);
    message.channel.send(`${message.author.username}, ${rateSubject} is a **${rateResult}/10**.`)
  }
  
  if (command === "coin") {
    var result = Math.floor((Math.random() * 2) + 1);
    if (result == 1) {
      message.channel.send(`${message.author.username} tossed a coin and got **Heads!**`);
    } else if (result == 2) {
      message.channel.send(`${message.author.username} tossed a coin and got **Tails!**`);
    }
  }  
  
  if (command === "roll") {
    let rollNumber = message.content;
    rollNumber = rollNumber.slice(command.length + 1);
    let rollResult = Math.floor((Math.random() * rollNumber) + 1);
    var rollReturn = new Discord.RichEmbed()
    .setAuthor("🎲 Rolling Dice!")
    .setDescription(`${message.author} rolled... **${rollResult}**`)
    .setColor(0x00AE86)
    message.channel.send(rollReturn);
  }
  
 if(command === "8ball") {
    var sayings = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
    var result = Math.floor((Math.random() * sayings.length) + 0);
    message.channel.send(`🎱 | ${sayings[result]}, ${message.author.username}`);
  }  
  
  if(command === "mute") {
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

  if(command === "unmute"){
    let cornerOfShame = message.guild.roles.get("441964599491690506");
    let member = message.mentions.members.first();
    if(!message.member.roles.some(r=>["Administrator", "Developer", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    if(!member)
      return message.reply("Please mention a valid member of this server");
    message.delete()
    member.removeRole(cornerOfShame).catch(console.error);
    message.reply(`${member.user} has been unmuted.`)
  }
	if(command === "kick") {
		message.delete()
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Developer", "BEST NAZI GIRL"].includes(r.name)) )
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

	if(command === "ban") {
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
  if(command === "help"){
  var help = new Discord.RichEmbed()
  .setTitle("Rensouhou's Help Screen")
  .addField(">quickpoll [question]", "Creates a Y/N poll", true)
  .addField(">coin", "Flips a coin", true)
  .addField(">rate [thing to rate]", "Rates things on a scale of 1-10", true)
  .addField(">roll [number]", "Rolls a [number] sided die", true)
  .addField(">8ball [question]", "Magic 8ball", true)
  .addField(">ping", "Pings Rensouhou", true)
  .addField(">suggest [suggestion]", "Creates a suggestion in #suggestions", true)
  .setFooter("I can do more but that's only for the admins :(")
  .setColor(0x00AE86)
  message.channel.send(help);
  }  
    if(command === "bean"){
      if (message.author.id !== config.ownerID) return;
      let member = message.mentions.members.first();
      member.send(`GET BEANED`,{
        file: "https://cdn.discordapp.com/attachments/315221002424549377/533440019092733952/hEkADo6.jpg"
      });
      member.send("https://www.youtube.com/watch?v=NI7L11tsB8o&feature=youtu.be&t=25");
  }
});

bot.login("NDQxMzc3NDA1NTg0NjcwNzM0.XN3Z_g.aKVqd2oAPKKdDP7TSi-rpi35g78");