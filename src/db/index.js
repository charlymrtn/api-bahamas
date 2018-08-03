/* eslint-disable */
/**
 *  Warning! you need to install driver for database to use (MSSQL, PostgreSql, SQLite, MySql),
 *  add set options in .env variables and change dialect for the database.
 *
 *  more info at http://docs.sequelizejs.com/manual/installation/usage.html
 */
const Sequelize = require('sequelize');
const config = require('../../config');
// TODO: haz require de todos los modelos aca, asi como estan abajo.
//const AccountPurposeType = require('./models/AccountPurposeType');
const Lead = require('./models/Lead');

const mySql = new Sequelize(config.db.name, config.db.user, config.db.pass, {
  host: config.db.host,
  dialect: config.db.dialect,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});

  const authenticateDb = () => mySql.authenticate().then(()=>{
    mySql.sync();
  });


// TODO: exporta todos los modelos pasandole como parametro la el objeto mysql (1ero)
// y la clase Sequelize (2do)
module.exports = {
  authenticateDb,
  //AccountPurposeType: AccountPurposeType(mySql, Sequelize),
  Lead: Lead(mySql, Sequelize)
};
