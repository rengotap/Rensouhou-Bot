exports.run = (bot, message, args) => {
  
    var TbaApiV3client = require('tba-api-v3client');
  
    var defaultClient = TbaApiV3client.ApiClient.instance;
    // Configure API key authorization: apiKey
    var apiKey = defaultClient.authentications['apiKey'];
    apiKey.apiKey = "pzxCXN4rqwV3lgKPrfhi1EBnpz1mpewP0m9sQZFtrButeWrXkRcXLX0xjj71nBAi";
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //apiKey.apiKeyPrefix['X-TBA-Auth-Key'] = "Token"
  
  let apiInstance = new TbaApiV3client.TeamApi();
  let teamKey = message.content.split(" ")[1];; // String | TBA Team Key, eg `frc254`
  let opts = {
    'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
  };
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