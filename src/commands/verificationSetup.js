const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle, PermissionsBitField } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vsetup')
		.setDescription('Setting up the verification on channel.')
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageChannels),
	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Verification')
            .setDescription(`**To get access to the rest of server you need to verify that you are a human!**
            **Press the green button under the message, to get verified!**`)
            .setColor(0xFF0FFF)
            .setFooter({ text: 'kdCode | Made by mDeveloper' })

		const row = new ActionRowBuilder()
			.addComponents(
                new ButtonBuilder()
                    .setCustomId('verificationButtonID')
                    .setStyle(ButtonStyle.Success)
	                .setEmoji('✅')
                    .setLabel('Verify Yourself')
            );

		await interaction.channel.send({ embeds: [embed], components: [row] });
        await interaction.reply({ content: 'Message created!', ephemeral: true })
	},
};