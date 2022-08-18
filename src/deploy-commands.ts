import { SlashCommandBuilder, Routes, REST } from 'discord.js';

import config from './config';
import { logger } from './lib';

(async () => {
  const { clientId, guildId, token, commands } = config;

  const commandsJSON = commands.map(({ name, description }) =>
    new SlashCommandBuilder().setName(name).setDescription(description).toJSON()
  );

  const rest = new REST({ version: '10' }).setToken(token);

  try {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commandsJSON,
    });

    logger.info('😀 Successfully registered application commands.');
  } catch (error) {
    logger.error(error);
    throw error;
  }
})();
