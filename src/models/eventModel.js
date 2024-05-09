const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDescription: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventTime: {
        type: String,
        required: true
    },
    eventLocation: {
        type: String,
        required: true
    },
    eventOrganizer: {
        type: String,
        required: true
    },
    eventImage: {
        type: String,
        required: true
    },
    eventOrganizerEmail: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('events', Schema);