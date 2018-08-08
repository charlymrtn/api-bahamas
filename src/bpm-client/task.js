/* eslint-disable */

const bpm = require('./index');
const container = 'pbil_1.0.33';

const startTask = (instanceId, variable) =>
    new Promise((resolve, reject) => {
        bpm.get(`/queries/tasks/instances/process/${instanceId}`)
            .then((res) => {
                const array = res['task-summary'];
                const taskReady = array.filter(task => task['task-status'] == 'Ready');
                return taskReady['task-id'];
            })
            .then(taskId => bpm.put(`/containers/${container}/tasks/${taskId}/states/claimed`))
            .then(resolve({message: `tarea ${taskId} reclamada`}))
            .catch(err => reject(err));
    });

module.exports = startTask;
