const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

const exampleEmbed = new EmbedBuilder()
    .setColor("Green")
    .setTitle("Redes Sociais da Gurizada")
    .addFields(
        { name: '\u200B', value:'\u200B'},
            { name: 'Joao', value: 'https://www.instagram.com/joaohaubert_/' },
            { name: 'Vitin Vagabund', value: 'https://www.instagram.com/skt_garcia/' },
            { name: 'Anderson', value: 'https://www.instagram.com/andeergr/' },
            { name: 'Igor Kaguya', value: 'https://www.instagram.com/igordiegx/' },
            { name: 'Matheus Mts', value: 'A mulher não deixa' },
            { name: 'Favin', value: 'https://www.instagram.com/igorstinieski/' },
            { name: 'Guilherme Pikeno', value: 'https://www.instagram.com/gguilherme.r/' },
            { name: 'McGayver', value: 'https://www.instagram.com/magaiver.filipowitz/' },
            { name: 'Marcos Mks', value: 'https://www.instagram.com/mkszor/' },
            { name: 'Andrio 4H', value: 'https://www.instagram.com/andriobrunner_/' },
    )




module.exports = {
    data: new SlashCommandBuilder()
        .setName("gurizada")
        .setDescription("Redes Sociais"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed]})
    }
}