exports.run = (bot, message, args) => {
    let rateResult = Math.floor((Math.random() * 10) + 1);
    let rateSubject = message.content
    rateSubject = rateSubject.slice(5);
    message.channel.send(`${message.author.username}, ${rateSubject} is a **${rateResult}/10**`)
  }