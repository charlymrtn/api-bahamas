/* eslint-disable */
'use strict';

const { bpm } = require('./index');
const { bpmData } = require('../../config');

const {
    Country
} = require('../db');

exports.startTask = (instanceId, variable) => {
    let idTask = 0;

    bpm.get(`/queries/tasks/instances/process/${instanceId}`)
        .then((res) => {
            console.log(res);
                
            const array = res.data['task-summary'];
            const [taskReady] = array.filter(task => task['task-status'] != 'Completed');
            console.log(taskReady);
            idTask = taskReady['task-id'];
            console.log(idTask);
            return taskReady['task-id'];
        })
        .then(taskId => bpm.put(`/containers/${bpmData.container}/tasks/${taskId}/states/started?user=user1`))
        .then(() => Country.findOne({
            where: {
                countryCode: variable
            }
        }))
        .then(country => country.dataValues.name)
        .then(name => bpm.put(`/containers/${bpmData.container}/processes/instances/${instanceId}/variable/nationality`, `"${name}"`))
        .then(() => bpm.put(`/containers/${bpmData.container}/tasks/${idTask}/states/completed?user=user1`))
        .then(() => res.status(201).json({
                error: false,
                data: [],
                message: `Tarea ${idTask} de la instancia ${instanceId} completada`
        }))
        .catch(err => res.status(501).json({
                error: true,
                data: [],
                message: err
            })
        );
    };