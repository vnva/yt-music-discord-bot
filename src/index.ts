import { Client, GatewayIntentBits } from 'discord.js';
import config from './config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => console.log('ready'));

client.on('interactionCreate', async interaction => {
  if (interaction.isCommand()) {
    const { commandName } = interaction;

    if (commandName === 'ping') {
      await interaction.reply('Pong!');
    } else if (commandName === 'server') {
      await interaction.reply('Server info.');
    } else if (commandName === 'user') {
      await interaction.reply('User info.');
    }
  }
});

client.login(config.token);
