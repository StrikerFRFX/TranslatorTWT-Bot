// Uptime Robot
// (for 24/7 accessibility)
// (remove if you aren't on repl.it)
const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/', (req, res) => {
  res.send(new Date());
});
// Packages
var path = require('path');
global.appRoot = path.resolve(__dirname);

const Commando = require('discord.js-commando');
const sqlite = require('sqlite');
// Start up client
global.client = new Commando.Client({
  owner: process.env.id,
  commandPrefix: ';' // Default prefix, configure if needed
});
// Listen Events
global.client
  .on('error',console.error)
  .on('warn',console.warn)
  .on('debug',console.log)
  .on('ready', () => {
    global.client.user.setActivity(`for commands (@${global.client.user.tag} help)`, { type: 'WATCHING' })
      .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
      .catch(console.error);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~\n");
    console.log("   TranslatorTWT BOT\n");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Built by various members");
    console.log("of the schlatt community");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(`Logged in as @${global.client.user.tag}!`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
  })
  .on('disconnect', () => console.log('Disconnected and will no longer attempt to reconnect.'))
  .on('reconnecting', () => console.log('Attempting to reconnect...'))
  .on('resume', replays => console.log('WebSocket resumed (we\'re back online.) ' + replays + ' events have been replayed.'))
  .on('commandError', (cmd,err) => {
    if (err instanceof Commando.FriendlyError) return;
    console.error(`Error occured in command ${cmd.groupID}:${cmd.memberName}`,err);
  });
// Register commands
global.client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['gen','General Commands'],
    ['meme','Meme Commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({help:false,eval:false})
  .registerCommandsIn(path.join(__dirname,'cmds'));
// Login
global.client.login(process.env.token);