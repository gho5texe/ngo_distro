const publicRoute = require('express').Router();
const authenticate = require('../utils/authentication');
const eventModel = require('../models/eventModel');
const ngoModel = require('../models/ngoModel');
publicRoute.get('/', (req, res, next) => {
    console.log(authenticate(req, res, next))
    const { isAuthorized } = authenticate(req, res, next);
    res.render('index', {
        title: 'Profile',
        isAuthorized: isAuthorized
    })
})
publicRoute.get('/ngo', (req, res, next) => {
    console.log(authenticate(req, res, next))
    const { isAuthorized } = authenticate(req, res, next);
    ngoModel.find({})
        .then(ngos => {
            res.render('ngo', {
                title: 'NGO',
                isAuthorized: isAuthorized,
                ngos: ngos
            })
        })
        .catch(err => {
            res.json({
                error: 'Error fetching ngos'
            })
        })
})

publicRoute.get('/events', (req, res, next) => {
    const { isAuthorized, details } = authenticate(req, res, next);
    if (isAuthorized) {
        eventModel.find({})
            .then(events => {
                res.render('events', {
                    title: 'Profile',
                    isAuthorized: isAuthorized,
                    details: details,
                    events: events
                })
            })
            .catch(err => {
                res.json({
                    error: 'Error fetching ngos'
                })
            })

    } else {
        res.render('events', {
            title: 'Profile',
            isAuthorized: isAuthorized
        })
    }
})
module.exports = publicRoute;