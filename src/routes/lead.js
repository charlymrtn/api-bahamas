/* eslint-disable */
'use strict';

const lead = sequelize.import('../models/Lead')

exports.storeLead = (req, res) => {
    const name = req.body.name;
    const nationality = req.body.nationality;

    lead.create({
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
        error: error
    }));
};