exports.run = (bot, message, args) => {
    const verbs = ["soldering", "unplugging", "crimping", "plugging in", "cutting", "restarting", "zip tying", "attaching", "sanding","welding", "reinstalling", "reassembling", "rewriting", "heat-shrinking", "unscrewing", "retooling", "drilling into", "plasti dipping", "3d printing", "applying *Gracious Professionalism™*  to", "hitting", "using some good ol' percussive maintenance on" ];
    const nouns =["roboRio", "motor controller", "chassis", "battery", "robot signal light", "wheels", "motors", "power distribution panel", "voltage regulator module", "wires", "pneumatic control module", "drive code", "radio", "gearbox", "screws", "chain", "pneumatic tubing", "power cube", "hatch panel", "field element", "other team's robot", "judges", "rivets", "drive computer"];
    var verbResult = Math.floor((Math.random() * verbs.length) + 0);
    var nounResult = Math.floor((Math.random() * nouns.length) + 0);
    message.channel.send(`Try ${verbs[verbResult]} the ${nouns[nounResult]}.`)
  }