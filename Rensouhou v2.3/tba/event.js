exports.run = (bot, message, args) => {
    var TbaApiV3client = require("tba-api-v3client");
    const Discord = require("discord.js");
    var defaultClient = TbaApiV3client.ApiClient.instance;
    // Configure API key authorization: apiKey
    var apiKey = defaultClient.authentications["apiKey"];
    apiKey.apiKey =
      "pzxCXN4rqwV3lgKPrfhi1EBnpz1mpewP0m9sQZFtrButeWrXkRcXLX0xjj71nBAi";
  
    let apiInstance = new TbaApiV3client.EventApi();
    let eventKey = message.content.split(" ")[2]; // String | TBA Event Key, eg `2016nytr`
    let opts = {
      ifModifiedSince: "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
    };
    apiInstance.getEvent(eventKey, opts, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log("API called successfully. Returned data: " + data);
        var eventInfo = new Discord.RichEmbed()
          .setColor(0x00ae86)
          .setAuthor(data.name)
          .addField("Duration", `${data.startDate} - ${data.endDate}`)
          .setFooter("Information provided by The Blue Alliance");
        message.channel.send(eventInfo);
      }
    });
  };
  