/* eslint-disable */
'use strict';

// TODO: usando destructuring, importa tus schemas al archivo en el que lo usaras, como abajo.SOlo los schemas que usaras no es necesario traerlos todos.
const {
    Country
} = require('../db');

exports.countries = (req, res) => {

    Country.findAll({})
        .then(countries => res.status(200).json({
            error: false,
            data: countries,
            message: 'all countries'
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};

exports.getCountryName = (req, res) => {

    const code = req.params.code;

    Country.findOne({
        where: {
            countryCode: code
        }
    })
        .then(country => res.status(200).json({
            error: false,
            data: country,
            message: 'country by code'
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};