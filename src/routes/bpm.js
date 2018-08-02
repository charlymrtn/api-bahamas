/* eslint-disable */
'use strict';

const request = require('request');
const _ = require('lodash');

const baseUrl = 'ec2-35-161-130-182.us-west-2.compute.amazonaws.com:8080/kie-server/services/rest';

exports.startInstance = (req, res) => {
    const user = req.params.user;
    const pass = req.params.pass;

    const urlIniciar = `http://${user}:${pass}@${baseUrl}/server/containers/pbil_1.0.9/processes/pbil.clientOnboarding/instances`;

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

     request.post({
         url: urlIniciar,
         headers
     }, (error, response, body) => {

         //if(O.length <= 0) return res.status(400).jsonp({mensaje:'Error al avanzar instancia'});
         console.log('GET /instance/start');
         res.status(200).send(body);
     });
};

exports.listTasks = (req, res) => {
    var O = [];
    const user = req.params.user;
    const pass = req.params.pass;
    const instancia = req.params.instancia;
    const url = `http://${user}:${pass}@${baseUrl}/server/queries/tasks/instances/process/${instancia}`;
    const headers = {
        'Accept': 'application/json'
    };

    request({
        url: url,
        headers: headers
    }, (error, response, body) => {
        console.log('GET /tasks');
        res.status(200).send(body);

    });
};
