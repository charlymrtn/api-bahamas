/* eslint-disable */

const bpm = require('./index');
const container = 'pbil_1.0.33';

const startTask = (instanceId, variable) =>
    new Promise((resolve, reject) => {
        bpm.get(`/queries/tasks/instances/process/${instanceId}`)
            .then((res) => {
                const array = res['task-summary']
                return res;
            })
            .then(taskId => )
            .then(resolve({}))
            .catch(err => reject(err));
    });

module.exports = startTask;
