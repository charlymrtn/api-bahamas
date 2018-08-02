
const http = require('http');

const app = require('./src/app.js');
const config = require('./config');
const { authenticateDb } = require('./src/db');
const logger = require('./config/logger');

const server = http.createServer(app);

authenticateDb
  .then(() => {
    console.log(`Connection ${config.db.host} has been established successfully.`);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

server.listen(config.port, () => {
  logger.info(`${config.env} server up and running on port: ${config.port}`);
});

module.exports = server;
