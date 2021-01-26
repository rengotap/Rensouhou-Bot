exports.run = (bot, message, args) => {
    let roleName = message.content.slice(5)// gets the role name
    let roleID = 0;
    switch(roleName){
        case(""):
          roleID = "arewgtteG";
          break;
    }
    
    message.member.addRole(roleID);//adds the role
    if(roleID != 0){message.channel.send("Role added successfully")}; //if the role is added
    if(roleID = 0){message.channel.send("An error has occurred, please try again.")}; //if it isn't
    
  }