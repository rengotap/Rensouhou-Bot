exports.run = (bot, message, args, teamNum) => {
    let teamID = "operation failed";
    let operationFailed = "no";
    let failOP = "error";
    let operator = message.member.user;
    switch(teamNum) {
      case("5608"):
        teamID = "it worked";
        break;
      case("9999"):
        teamID = "565302276558815243";
        break;
      default:
        teamID = "565306205485137927";
        failOP = teamNum;
        teamNum = "...That's odd, I couldn't find your team. Please give me a moment to contact an admin so they can correct this issue.";
        message.member.guild.channels.get("404785029147918346").send(`An error has occured while trying to assign ${operator}'s team role. Maybe their team doesn't have a role yet?`)
        message.member.guild.channels.get("404785029147918346").send(`Team Number Given: ${failOP}`)
        break;
    }
    message.member.addRole(teamID);
    message.channel.send(`You've been added to team ${teamNum}`)
}