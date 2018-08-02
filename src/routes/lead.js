/* eslint-disable */
'use strict';

const lead = sequelize.import('../models/Lead')
// TODO: usando destructuring, importa tus schemas al archivo en el que lo usaras, como abajo.SOlo los schemas que usaras no es necesario traerlos todos.
const { Lead, AccountPurposeType }  = require('../db');

exports.storeLead = (req, res) => {
    const name = req.body.name;
    const nationality = req.body.nationality;

    Lead.create({
        name: name,
        nationality: nationality
    })
    .then(lead => res.status(200).json({
        error: false,
        data: lead,
        message: 'lead created'
    }))
    .catch(error => res.status(500).json({
        error: true,
        data: [],
        error: error// TODO: revisa los nombre de las propiedades que no sean iguales.
    }));
};