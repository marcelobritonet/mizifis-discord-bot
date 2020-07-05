//https://discord.com/developers/applications
//https://discordjs.guide/
//https://github.com/discordjs/discord.js
//https://discord.js.org/#/
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const {callBrunao} = require('./messages/message');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', callBrunao);

client.login(process.env.TOKEN);