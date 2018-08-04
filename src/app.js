const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const config = require('../config');
const logger = require('../config/logger');

const app = express();
logger.info(`setting up enviroment ${config.env}`);
logger.info('configuring express...');
app.use(morgan('combined', { stream: logger.stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.use(helmet());

const rutas = express.Router();

const reqBpm = require('./routes/bpm');
const reqLead = require('./routes/lead');
const reqCountry = require('./routes/country');
const reqCurrency = require('./routes/AdditionalCurrency');
const reqAddress = require('./routes/Address');
const reqAdditionalnfo = require('./routes/ClientAdditionalInformation');

// Put here route middlewares
logger.info('setting up routes...');
app.use('/hello', (req, res) => {
  res.status(200).jsonp({
    env: config.env,
    message: 'Hello World!!',
  });
});


// rutas BPM
rutas.route('/instance/start/:user/:pass')
  .post(reqBpm.startInstance);

rutas.route('/tasks/:user/:pass/:instancia')
  .get(reqBpm.listTasks);

rutas.route('/tasks/:user/:pass/:tarea/claim')
  .post(reqBpm.claimTask);

rutas.route('/tasks/:user/:pass/:tarea/start')
  .post(reqBpm.startTask);

rutas.route('/tasks/:user/:pass/:tarea/complete')
  .post(reqBpm.completeTask);

rutas.route('/tasks/:user/:pass/:tarea/release')
  .post(reqBpm.releaseTask);

rutas.route('/signal/:user/:pass/:instancia/:signal/:string')
  .post(reqBpm.sendSignal);

rutas.route('/variable/:user/:pass/:instancia/:variable/:valor')
  .post(reqBpm.assignVariable);

// rutas lead
rutas.route('/lead')
  .post(reqLead.storeLead);

rutas.route('/lead')
  .get(reqLead.showLeads);

rutas.route('/lead/:id')
  .put(reqLead.updateLead);

rutas.route('/lead/:id')
  .delete(reqLead.deleteLead);

rutas.route('/lead/:id')
  .get(reqLead.showLead);

rutas.route('/lead/proccess/:proccessID')
  .get(reqLead.getLeadByProccessID);

// rutas additional currency
rutas.route('/currency')
  .post(reqCurrency.storeCurrency);

rutas.route('/currency/:id')
  .get(reqCurrency.getCurrency);

// rutas Address
rutas.route('/address')
  .post(reqAddress.storeAddress);

rutas.route('/address/:id')
  .get(reqAddress.getAddress);

// rutas additional client info
rutas.route('/additionalInfo')
  .post(reqAdditionalnfo.storeAdditionalInfo);

rutas.route('/additionalInfo/:leadId')
  .get(reqAdditionalnfo.getAdditionalInfoByLeadID);

// ruta country
rutas.route('/countries')
  .get(reqCountry.countries);

rutas.route('/countries/name/:code')
  .get(reqCountry.getCountryName);

app.use('/api', rutas);

// The 404 Route (ALWAYS Keep this as the last route)
app.all('/*', (req, res) => {
  res.status(404).jsonp({
    code: 404,
    message: 'Not Found',
    description: 'sorry, requested route was not found'
  });
});

module.exports = app;
