/* eslint-disable */
'use strict';

// TODO: usando destructuring, importa tus schemas al archivo en el que lo usaras, como abajo.SOlo los schemas que usaras no es necesario traerlos todos.
const { Lead }  = require('../db');

exports.storeLead = (req, res) => {
    const leadObj = req.body;

    Lead.create(leadObj)
    .then(lead => res.status(200).json({
        error: false,
        data: lead,
        message: 'lead created'
    }))
    .catch(error => res.status(500).json({
        error: true,
        data: [],
        message: error
    }));
};

exports.showLeads = (req, res) => {

    Lead.findAll({})
        .then(lead => res.status(200).json({
            error: false,
            data: lead,
            message: 'all leads'
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};

exports.showLead = (req, res) => {
    const id = req.params.id;

    Lead.findById(id)
        .then(lead => res.status(200).json({
            error: false,
            data: lead,
            message: 'lead '+id
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};

exports.getLeadByProccessID = (req, res) => {
    const id = req.params.proccessID;

    Lead.findOne({where: {proccessID: id}})
        .then(lead => res.status(200).json({
            error: false,
            data: lead,
            message: 'lead ' + id
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};

exports.updateLead = (req, res) => {
    const id = req.params.id;
    const leadObj = req.body;

    Lead.update(leadObj,{
        where: {
            leadID: id
        }
    })
        .then(lead => res.status(200).json({
            error: false,
            data: lead,
            message: 'lead updated'
        }))
        .catch(error => res.status(500).json({
            error: true,
            data: [],
            message: error
        }));
};

exports.deleteLead = (req, res) => {
    const id = req.params.id;

    Lead.destroy({
            where: {
                leadID: id
            }
        })
        .then(starus => res.status(200).json({
            error: false,
            message: 'lead deleted'
        }))
        .catch(error => res.status(500).json({
            error: true,
            message: error
        }));
};