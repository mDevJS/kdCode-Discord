const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) { if(message.author.username === 'kdCode') return; console.log(message.author.username, message.content) },
};