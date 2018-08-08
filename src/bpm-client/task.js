/* eslint-disable */

const { bpm } = require('./index');
const { bpmData } = require('../../config');

const {
    Country
} = require('../db');

const startTask = (instanceId, variable) =>
    new Promise((resolve, reject) => {
        let idTask = 0;
        let options = {method: 'PUT'};

        bpm.get(`/queries/tasks/instances/process/${instanceId}`)
            .then((res) => {
                const array = res.data['task-summary'];
                const [taskReady] = array.filter(task => task['task-status'] == 'Ready');
                console.log(taskReady);
                idTask = taskReady['task-id'];
                return taskReady['task-id'];
            })
            .then(taskId => bpm.put(`/containers/${bpmData.container}/tasks/${taskId}/states/started?user=user1`))
            .then(() => Country.findOne({
                where: {
                    countryCode: variable
                }
            }))
            .then(res => res.dataValues.name)
            .then(name => bpm.put(`/containers/${bpmData.container}/processes/instances/${instanceId}/variable/nationality`, `"${name}"`))
            .then(() => bpm.put(`/containers/${bpmData.container}/tasks/${idTask}/states/completed?user=user1`))
            .then(()=> resolve({
                message: `tarea ${idTask} completada`
            }))
            .catch(err => reject(err));
    });

/* startTask(72,'IRA')
    .then(res => console.log(res))
    .catch(err => console.log(err)); */

module.exports = startTask;
