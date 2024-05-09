const authRoute = require('express').Router();
const userModel = require('../models/userModel');
const ngoModel = require('../models/ngoModel');
const authenticate = require('../utils/authentication');
authRoute.get('/profile', (req, res, next) => {
    const { isAuthorized, details } = authenticate(req, res, next);
    if (!isAuthorized) {
        res.render('profile', {
            title: 'Profile',
            isAuthorized: isAuthorized
        })
    } else {
        if (details) {
            if (details.whoIS === 'ngo') {
                ngoModel.findOne({ email: details.user })
                    .then(ngo => {
                        res.render('profile', {
                            title: 'Profile',
                            isAuthorized: isAuthorized,
                            data: ngo
                        })
                    })
                    .catch(err => {
                        res.json({
                            error: 'Error fetching ngo'
                        })
                    })
            } else if (details.whoIS === 'user') {
                userModel.findOne({ email: details.user })
                    .then(user => {
                        res.render('profile', {
                            title: 'Profile',
                            isAuthorized: isAuthorized,
                            data: user
                        })
                    })
                    .catch(err => {
                        res.json({
                            error: 'Error fetching user'
                        })
                    })
            }
        } else {
            console.log('Details not found');
            res.json({
                error: 'Details not found'
            })
        }
    }

})

authRoute.get('/create-event', (req, res, next) => {
    const { isAuthorized } = authenticate(req, res, next);
    if (isAuthorized) {
        res.render('create-event', {
            title: 'Create Event',
            isAuthorized: isAuthorized
        })
    } else {
        res.send('You are not authorized to view this page');
    }
})

authRoute.get('/logout', (req, res, next) => {
    const { isAuthorized } = authenticate(req, res, next);
    if (isAuthorized) {
        res.clearCookie('token');
        res.redirect('/')
    }
    else {
        res.send('You are not authorized to view this page');
    }
})


module.exports = authRoute;