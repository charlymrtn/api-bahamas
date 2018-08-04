/* eslint-disable */
'use strict';

// TODO: usando destructuring, importa tus schemas al archivo en el que lo usaras, como abajo.SOlo los schemas que usaras no es necesario traerlos todos.
const {
    ClientAdditionalInformation
} = require('../db');

exports.storeAdditionalInfo = (req, res) => {
    const additionalInfoObj = req.body;

    ClientAdditionalInformation.create(additionalInfoObj)
        .then(ClientAdditionalInformation => res.status(200).json({
            error: false,
            data: ClientAdditionalInformation,
            message: 'lead created'
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};

exports.getAdditionalInfoByLeadID = (req, res) => {
    const id = req.params.proccessID;

    ClientAdditionalInformation.findOne({
            where: {
                leadId: id
            }
        })
        .then(ClientAdditionalInformation => res.status(200).json({
            error: false,
            data: ClientAdditionalInformation,
            message: 'lead ' + id
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};