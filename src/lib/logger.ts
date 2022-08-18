import winston, { format as formatLog } from 'winston';
import { format as fromatDate } from 'date-fns';

import config from '../config';

const { logTimeFormat } = config;
const { combine, colorize, prettyPrint, timestamp, label, printf } = formatLog;

const loggerFormat = () => {
  const uppercaseLevel = formatLog(info => {
    info.level = info.level.toUpperCase();
    return info;
  });

  const formatToText = printf(({ level, timestamp, message }) => {
    const dateTime = fromatDate(new Date(timestamp), logTimeFormat);

    return `[bot] [${level}|${dateTime}] ${message}`;
  });

  return combine(
    uppercaseLevel(),
    label(),
    timestamp(),
    colorize(),
    prettyPrint(),
    formatToText
  );
};

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: loggerFormat(),
  transports: [new winston.transports.Console()],
});

export default logger;
