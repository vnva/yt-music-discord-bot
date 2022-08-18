import { SlashCommandBuilder, Routes, REST } from 'discord.js';
import config from './config';

const { clientId, guildId, token, commands } = config;

const commandsJSON = commands.map(({ name, description }) =>
  new SlashCommandBuilder().setName(name).setDescription(description).toJSON()
);

const rest = new REST({ version: '10' }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), {
    body: commandsJSON,
  })
  .then(() => console.log('Commands registered.'))
  .catch(console.error);
