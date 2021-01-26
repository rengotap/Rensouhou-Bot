exports.run = (bot, message, args, defaultClient, apiKey, apiInstance, opts) => {
    let teamKey = message.content.split(" ")[1]; // String | TBA Team Key, eg `frc254`
      const team = apiInstance.getTeam(teamKey, opts, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + data);
      message.channel.send(data.nickname);
    }
  });
    //https://github.com/TBA-API/tba-api-client-javascript/blob/master/docs/Team.md
  }