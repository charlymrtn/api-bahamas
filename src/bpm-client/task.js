/* eslint-disable */

const { bpm } = require('./index');
const { bpmData } = require('../../config');

const startTask = (instanceId, variable) =>
    new Promise((resolve, reject) => {
        let idTask = 0;
        bpm.get(`/queries/tasks/instances/process/${instanceId}`)
            .then((res) => {
                //console.log(res.data);
                const array = res.data['task-summary'];
                const [taskReady] = array.filter(task => task['task-status'] == 'Ready');
                idTask = taskReady['task-id'];
                return taskReady['task-id'];
            })
            .then(taskId => bpm.put(`/containers/${bpmData.container}/tasks/${taskId}/states/started?user=${bpmData.user}`))
            //.then(() => bpm.put(``))
            .then(()=> resolve({
                message: `tarea ${idTask} iniciada`
            }))
            .catch(err => reject(err));
    });

startTask(72,'Iran')
    .then(res => console.log(res))
    .catch(err => console.log(err));

module.exports = startTask;
