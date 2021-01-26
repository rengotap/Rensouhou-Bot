const Discord = require("discord.js");
const config = require("./config.json");
const Enmap = require("enmap");
const fs = require("fs");

// self pinger DO NOT TOUCH//
const http = require("http");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
///////////////////////////

const bot = new Discord.Client();
bot.config = config;

//event handler//
fs.readdir("./events", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

//command handler//
bot.commands = new Enmap();
fs.readdir("./commands", (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Now loading ${commandName}...`);
    bot.commands.set(commandName, props);
  });
});
//tba handler
bot.tba = new Enmap();
fs.readdir("./tba", (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./tba/${file}`);
    let tbaName = file.split(".")[0];
    console.log(`Now loading tba/${tbaName}...`);
    bot.tba.set(tbaName, props);
  });
});

bot.login("REDACTED");
