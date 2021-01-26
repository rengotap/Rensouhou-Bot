exports.run = (bot, message, args) => {
    const Discord = require("discord.js");
    var TbaApiV3client = require('tba-api-v3client');
  
    var defaultClient = TbaApiV3client.ApiClient.instance;
    // Configure API key authorization: apiKey
    var apiKey = defaultClient.authentications['apiKey'];
    apiKey.apiKey = "pzxCXN4rqwV3lgKPrfhi1EBnpz1mpewP0m9sQZFtrButeWrXkRcXLX0xjj71nBAi";//Rensouhou's Unique Acess Key
  
  let apiInstance = new TbaApiV3client.TeamApi();
  let teamKey = `frc${message.content.split(" ")[2]}`; // String | TBA Team Key, eg `frc254`
    console.log(teamKey);
  let opts = {
    'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
  };
  const team = apiInstance.getTeam(teamKey, opts, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      //console.log('API called successfully. Returned data: ' + data);
      var teamStats = new Discord.RichEmbed()
      .setColor(0x00AE86)
      //.setThumbnail
      .addField("Team Name",data.nickname)
      .addField("Team Number",data.key.substring(3))
      .addField("Location", `${data.city}, ${data.country}`)
      .addField("Website",data.website)
      .setFooter("Information provided by The Blue Alliance")
      message.channel.send(teamStats);
    }
  });
    //https://github.com/TBA-API/tba-api-client-javascript/blob/master/docs/Team.md
  }