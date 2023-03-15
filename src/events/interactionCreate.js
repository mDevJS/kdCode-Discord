const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	once: false,
	async execute(interaction) {
        //Command is used
        if(interaction.isChatInputCommand()){
            if (!interaction.isChatInputCommand()) return;
            
            const command = interaction.client.commands.get(interaction.commandName);
        
            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }
        
            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                if(interaction.replied || interaction.deferred) await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
                else await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        } else if (interaction.isButton()){
            switch(interaction.customId){
                case 'danger':
                    interaction.reply({
                        content: 'Thanks for clicking red button',
                        ephemeral: true
                    }); break;
                case 'verificationButtonID':
                    interaction.reply({
                        content: 'Thanks! You are now verified!',
                        ephemeral: true
                    }); break;
            }
        }
	},
};