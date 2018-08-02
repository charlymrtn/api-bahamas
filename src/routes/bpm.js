/* eslint-disable */
'use strict';

const request = require('request');
const _ = require('lodash');

const baseUrl = 'ec2-35-161-130-182.us-west-2.compute.amazonaws.com:8080/kie-server/services/rest';
const container = 'pbil_1.0.9';

exports.startInstance = (req, res) => {
    const user = req.params.user;
    const pass = req.params.pass;

    const urlIniciar = `http://${user}:${pass}@${baseUrl}/server/containers/${container}/processes/pbil.clientOnboarding/instances`;

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
         //const resp = JSON.parse(body);
         res.status(200).jsonp(body);
     });
};

exports.listTasks = (req, res) => {

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
        const resp = JSON.parse(body);
        res.status(200).send(resp);

    });
};

exports.claimTask = (req, res) =>{
    const user = req.params.user;
    const pass = req.params.pass;
    const tarea = req.params.tarea;

    const urlClaim = `http://${user}:${pass}@${baseUrl}/server/containers/${container}/tasks/${tarea}/states/claimed`;

    const headers = {
        'Accept': 'application/json'
    };

    request.put({
        url: urlClaim,
        headers
    },(error,response,body)=>{
        if (error) return res.status(400).jsonp({
            mensaje: 'Error claim task',
            error: error
        });
        
        console.log('PUT /claim');
        if (body) {
            res.status(500).jsonp([{
                mensaje: body
            }]);
        }else{
            res.status(200).jsonp([{
                mensaje: 'claimed task'
            }]);
        }
        
    });
};
