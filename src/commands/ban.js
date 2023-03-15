const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle, PermissionsBitField } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Ban provided user from the server.')
        .setDMPermission(false)
        .setDescriptionLocalizations({ pl: 'Zbanuj podanego użytkownika z serwera.' })
        .setDefaultMemberPermissions(PermissionsBitField.Flags.BanMembers)
        .addUserOption(option => option.setName('target').setDescription('User to ban').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for banning')),
	async execute(interaction) {
        const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';

        const embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setDescription(`🔨 **${target} got BANNED**! (Reason: **\`${reason}\`**)`)

		await interaction.reply({ content: `**Banning user: \`${target.username}\` for reason: \`${reason}\`**`, ephemeral: true });
		await interaction.guild.members.ban(target, { deleteMessageSeconds: 60 * 60 * 24 * 7, reason });
        await interaction.channel.send({ embeds: [embed] });
    },
};