const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    phone__no: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        default: "NGO"
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    dob: {
        type: Date,
        required: true
    },
    linkedin: {
        type: String,
    },
    description: {
        type: String,
    },
    profile: {
        type: String,
        default: 'profile.png'
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('ngos', Schema);