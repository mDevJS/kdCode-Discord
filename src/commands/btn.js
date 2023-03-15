const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('btn')
		.setDescription('testin da bathons'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
                new ButtonBuilder()
                    .setURL('https://google.com')
                    .setStyle(ButtonStyle.Link)
	                .setEmoji('🔗')
                    .setLabel('Claim'),
                new ButtonBuilder()
	                .setEmoji('🪙')
                    .setCustomId('coins')
                    .setStyle(ButtonStyle.Primary)
                    .setDisabled(true),
            );

		await interaction.reply({ content: 'bafyns tezd', components: [row] });
	},
};