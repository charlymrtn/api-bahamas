const axios = require('axios');

const task = require('./task');

const baseUrl =
  'http//user1:alkimia.1@ec2-35-161-130-182.us-west-2.compute.amazonaws.com:8080/kie-server/services/rest/server';

const options = {
  baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
};

const bpm = axios.create(options);

module.exports = { bpm, task };
