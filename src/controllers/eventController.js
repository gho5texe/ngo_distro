const eventController = require('express').Router()
const eventModel = require('../models/eventModel')
const authenticate = require('../utils/authentication');
const ngoModel = require('../models/ngoModel');

eventController.post('/create-event', (req, res, next) => {
    const { isAuthorized, details } = authenticate(req, res, next);
    if (isAuthorized) {
        if (details.whoIS === 'user') {
            res.sendStatus(401).end()
        } else {
            ngoModel.findOne({ email: details.user })
                .then(ngo => {
                    if (ngo) {
                        const newEvent = new eventModel({
                            eventName: req.body.eventName,
                            eventDescription: req.body.eventDescription,
                            eventDate: req.body.eventDate,
                            eventTime: req.body.eventTime,
                            eventLocation: req.body.eventLocation,
                            eventOrganizer: ngo.firstName + ' ' + ngo.lastName,
                            eventImage: req.body.eventImage,
                            eventOrganizerEmail: ngo.email
                        })
                        newEvent.save()
                            .then(event => {
                                console.log(event)
                                res.status(200).json({
                                    message: 'Event created successfully'
                                })
                            }).catch(err => {
                                if (err) {
                                    console.log(err)
                                    res.json({
                                        error: 'Error creating event'
                                    })
                                }
                            })
                    } else {
                        res.sendStatus(401).end()
                    }
                })
        }
    } else {
        res.json({
            error: 'Unauthorized'
        })
    }
})

module.exports = eventController