/* eslint-disable */
'use strict';

const { bpm } = require('../bpm-client');

const listTasks = (req, res) => {
    const instanceId = req.params.id;
    console.log(instanceId);

    bpm.get(`/queries/tasks/instances/process/${instanceId}`)
        .then((tasks) => {
            console.log(tasks.data);

            res.status(201).json({
                error: false,
                data: tasks.data,
                message: `list of tasks of instance ${instanceId}`
            });
        })
        .catch(error => res.status(501).json({
            error: true,
            data: [],
            message: error
        }));
};

module.exports = {listTasks};

/* exports.claimTask = (req, res) =>{
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

exports.startTask = (req, res) => {
    const user = req.params.user;
    const pass = req.params.pass;
    const tarea = req.params.tarea;

    const urlstart = `http://${user}:${pass}@${baseUrl}/server/containers/${container}/tasks/${tarea}/states/started?user=${user}`;

    const headers = {
        'Accept': 'application/json'
    };

    request.put({
        url: urlstart,
        headers
    }, (error, response, body) => {
        if (error) return res.status(400).jsonp({
            mensaje: 'Error start task',
            error: error
        });

        console.log('PUT /start');
        if (body) {
            res.status(500).jsonp([{
                mensaje: body
            }]);
        } else {
            res.status(200).jsonp([{
                mensaje: 'started task'
            }]);
        }

    });
};

exports.completeTask = (req, res) => {
    const user = req.params.user;
    const pass = req.params.pass;
    const tarea = req.params.tarea;

    const urlstart = `http://${user}:${pass}@${baseUrl}/server/containers/${container}/tasks/${tarea}/states/completed?user=${user}`;

    const headers = {
        'Accept': 'application/json'
    };

    request.put({
        url: urlstart,
        headers
    }, (error, response, body) => {
        if (error) return res.status(400).jsonp({
            mensaje: 'Error complete task',
            error: error
        });

        console.log('PUT /complete');
        if (body) {
            res.status(500).jsonp([{
                mensaje: body
            }]);
        } else {
            res.status(200).jsonp([{
                mensaje: 'completed task'
            }]);
        }

    });
};

exports.releaseTask = (req, res) => {
    const user = req.params.user;
    const pass = req.params.pass;
    const tarea = req.params.tarea;

    const urlstart = `http://${user}:${pass}@${baseUrl}/server/containers/${container}/tasks/${tarea}/states/released?user=${user}`;

    const headers = {
        'Accept': 'application/json'
    };

    request.put({
        url: urlstart,
        headers
    }, (error, response, body) => {
        if (error) return res.status(400).jsonp({
            mensaje: 'Error released task',
            error: error
        });

        console.log('PUT /release');
        if (body) {
            res.status(500).jsonp([{
                mensaje: body
            }]);
        } else {
            res.status(200).jsonp([{
                mensaje: 'released task'
            }]);
        }

    });
};

exports.sendSignal = (req, res) => {
    const user = req.params.user;
    const pass = req.params.pass;
    const instancia = req.params.instancia;
    const signal = req.params.signal;
    const string = req.params.string;

    const url = `http://${user}:${pass}@${baseUrl}/server/containers/${container}/processes/instances/${instancia}/signal/${signal}?user=${user}`;

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    request.post({
        url,
        headers,
        data: [{
                    'content-type': 'application/json',
                    body: string
                }],
    }, (error, response, body) => {
        if (error) return res.status(400).jsonp({
            mensaje: 'Error send signal',
            error: error
        });

        console.log('POST /signal');
        res.status(200).send(body);
        // if (body) {
        //     res.status(500).jsonp([{
        //         mensaje: body
        //     }]);
        // } else {
        //     res.status(200).jsonp([{
        //         mensaje: 'completed task'
        //     }]);
        // }

    });
};

exports.assignVariable = (req, res) => {
    const user = req.params.user;
    const pass = req.params.pass;
    const instancia = req.params.instancia;
    const variable = req.params.variable;
    const valor = req.params.valor;

    var req = valor;

    const url = `http://${user}:${pass}@${baseUrl}/server/containers/${container}/processes/instances/${instancia}/variable/${variable}`;

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    request.put({
        url,
        body: req,
        json: true
    }, (error, response, body) => {
        if (error) return res.status(400).jsonp({
            mensaje: 'Error assign variable',
            error: error
        });


        console.log('PUT /variable');
        if (body) {
             res.status(500).jsonp([{
            mensaje: body
            }]);
        }else {
            res.status(200).jsonp([{
                mensaje: 'assigned variable'
             }]);
        }

    });
};
 */