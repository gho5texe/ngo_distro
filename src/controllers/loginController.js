const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ngoModel = require('../models/ngoModel');
const userModel = require('../models/userModel');
const loginController = require('express').Router();
const authenticate = require('../utils/authentication');
loginController.post('/login', (req, res, next) => {
    const { isAuthorized } = authenticate(req, res, next);
    if (isAuthorized) {
        res.redirect('/profile');
    } else {
        if (req.body.user === 'user') {
            userModel.findOne({
                email: req.body.email
            }).then((user) => {
                if (user) {
                    bcrypt.compare(req.body.password, user.password, (err, result) => {
                        if (result) {
                            const token = jwt.sign({
                                user: user.email,
                                whoIS: 'user'
                            }, process.env.GET_JWT_SECRET, {
                                expiresIn: '1h'
                            })
                            res.cookie('token', token, {
                                httpOnly: true
                            })
                            res.status(200).send('User logged in')
                        } else {
                            res.status(401).send('Invalid email or password. Please try again.')
                        }
                    })
                } else {
                    res.status(401).send('Invalid email or password. Please try again.')
                }
            })
        } else if (req.body.user === 'ngo') {
            ngoModel.findOne({
                email: req.body.email
            }).then((user) => {
                if (user) {
                    bcrypt.compare(req.body.password, user.password, (err, result) => {
                        if (result) {
                            const token = jwt.sign({
                                user: user.email,
                                whoIS: 'ngo'
                            }, process.env.GET_JWT_SECRET, {
                                expiresIn: '1h'
                            })
                            res.cookie('token', token, {
                                httpOnly: true
                            })
                            res.status(200).send('NGO logged in')
                        } else {
                            res.status(401).send('Invalid email or password. Please try again.')
                        }
                    })
                } else {
                    res.status(401).send('Invalid email or password. Please try again.')
                }
            })
        }
    }
})

module.exports = loginController;