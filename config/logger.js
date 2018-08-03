/* eslint-disable no-unused-expressions */

const winston = require('winston');

winston.emitErrs = true;

/* const fileTransport = new winston.transports.File({
  filename: './logs/all-logs.log',
  handleExceptions: true,
  json: true,
  maxsize: 5242880, //  5MB
  maxFiles: 5,
  colorize: false
});
 */

const consoleTransport = new winston.transports.Console({
  handleExceptions: true,
  json: false,
  colorize: true
});

const logger = new winston.Logger({
  transports: [consoleTransport],
  exitOnError: false
});

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  logger.transports.console.level = 'info';
  logger.transports.file.level = 'info';
}

if (process.env.NODE_ENV === 'development') {
  logger.transports.console.level = 'debug';
  logger.transports.file.level = 'debug';
}

if (process.env.NODE_ENV === 'local') {
  logger.transports.console.level = 'debug';
  logger.transports.file.level = 'debug';
}

module.exports = logger;
module.exports.stream = {
  write: message => logger.info(message)
};
