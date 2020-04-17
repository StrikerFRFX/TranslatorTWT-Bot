const Commando = require('discord.js-commando');

module.exports = class CumCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'cum',
      aliases: ['cumchalice', 'chalice'],
      group: 'meme',
      memberName: 'cum',
      description: '**CONSUME THE CUM CHALICE**'
    });
  }
  async run(message) {
    message.channel.send('**CONSUME THE CUM CHALICE**\n\nhttps://giphy.com/gifs/cum-consume-chalice-LmOFVhdbZZrPZUHDEa');
  }
};