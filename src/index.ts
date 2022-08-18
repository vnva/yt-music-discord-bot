import { Client, GatewayIntentBits } from 'discord.js';

import config from './config';
import { logger } from './lib';

(async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.once('ready', () => {
    logger.info('🚀 Bot started successfully.');
  });

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
})();
