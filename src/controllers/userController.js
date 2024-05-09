const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')
const authenticate = require('../utils/authentication');
const userController = require('express').Router()

userController.post('/register', (req, res, next) => {
    const { isAuthorized } = authenticate(req, res, next);
    if (isAuthorized) {
        res.redirect('/profile')
    } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                res.json({
                    error: 'Error hashing password'
                })
            } else {
                const newUser = new userModel({
                    email: req.body.email,
                    dob: req.body.dob,
                    phone__no: req.body.phone,
                    state: req.body.state,
                    city: req.body.city,
                    password: hash
                })
                newUser.save()
                    .then(user => {
                        jwt.sign({ user: user.email, whoIS: 'user' }, process.env.GET_JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                            if (err) {
                                res.json({
                                    error: 'Error generating token'
                                })
                            } else {
                                res.cookie('token', token, { httpOnly: true })
                                res.sendStatus(200).end()
                            }
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        res.json({
                            error: 'Error creating user'
                        })
                    })
            }
        })
    }
})

module.exports = userController