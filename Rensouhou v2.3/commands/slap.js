exports.run = (bot, message, args) => {
  
    var slaps = ["https://media.giphy.com/media/Y6MPxbvvSvD6E/giphy.gif"]
    var result = Math.floor((Math.random() * slaps.length) + 0);
    message.channel.send(`${message.author} has slapped ${message.mentions.members.first()}!`,{
      file: slaps[result]})
  }