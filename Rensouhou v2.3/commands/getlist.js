exports.run = (bot, message, args) => {
    if (message.author.id !== bot.config.ownerID) return;
    const roleList = message.member.guild.roles.map(role => role.name);//gets a 1d array of all the roles on the server
    
    const teamNum = message.content.slice(9);//gets the team number from the message
    let teamName;
    
    let found = false;
    
    if(teamNum != undefined || teamNum != "");
    {
       for(let i =0; roleList.length>i;i++)
      {
        if(roleList[i].includes(teamNum))
        {
          teamName = roleList[i];
          message.channel.send(roleList[i]);
          i = roleList.length;// should hopefully stop the for loop once role is found
          found = true;
        }
      } 
    }
    
    if(found)
    {
      message.member.addRole(message.guild.roles.find("name", teamName)).catch(console.error);
      message.reply(`You have been added to ${teamName}.`);
      message.channel.send(`Now just type >name [First Name | Team Number] to gain access to the rest of the server!(Ex: >name Ren|5608)`);
    } else {
      message.channel.send("...That's odd, I couldn't find your team. Please give me a moment to contact an admin so they can correct this issue.");
      message.member.guild.channels.get("404785029147918346").send(`An error has occured while trying to assign ${message.user}'s team role. Maybe their team doesn't have a role yet?`)//sends issue to admin
      message.member.guild.channels.get("404785029147918346").send(`Team Number Given: ${teamNum}`)// logs given team number
      message.member.addRole("565306205485137927") //Error Role
    }
    
  }