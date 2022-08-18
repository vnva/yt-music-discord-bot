import 'dotenv/config';
import commands from './commands.json';

const config = {
  token: process.env.TOKEN as string,
  clientId: process.env.CLIENT_ID as string,
  guildId: process.env.GUILD_ID as string,
  logTimeFormat: process.env.LOG_TIME_FORMAT || 'HH:mm:ss',
  commands,
};

export default config;
