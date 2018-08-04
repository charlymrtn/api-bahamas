/* eslint-disable */
'use strict';

// TODO: usando destructuring, importa tus schemas al archivo en el que lo usaras, como abajo.SOlo los schemas que usaras no es necesario traerlos todos.
const {
    AdditionalCurrency
} = require('../db');

exports.storeCurrency = (req, res) => {
    const currencyObj = req.body;

    AdditionalCurrency.create(currencyObj)
        .then(currency => res.status(200).json({
            error: false,
            data: currency,
            message: 'currency created'
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};

exports.getCurrency = (req, res) => {
    const id = req.params.id;

    AdditionalCurrency.findAll({where: {leadID: id}})
        .then(projects => res.status(200).json({
            error: false,
            data: projects,
            message: 'currencies of Lead'
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};