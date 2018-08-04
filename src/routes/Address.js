/* eslint-disable */
'use strict';

// TODO: usando destructuring, importa tus schemas al archivo en el que lo usaras, como abajo.SOlo los schemas que usaras no es necesario traerlos todos.
const {
    Address
} = require('../db');

exports.storeAddress = (req, res) => {
    const addressObj = req.body;

    Address.create(addressObj)
        .then(address => res.status(200).json({
            error: false,
            data: address,
            message: 'address created'
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};

exports.getAddress = (req, res) => {
    const id = req.params.id;

    Address.findOne({
        where: {
            leadID: id
        }
    })
        .then(address => res.status(200).json({
            error: false,
            data: address,
            message: 'address from lead id'
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};