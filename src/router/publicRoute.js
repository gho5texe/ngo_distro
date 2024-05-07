const publicRoute = require('express').Router();

publicRoute.get('/', (req, res, next) => {
    res.render('index')
})

module.exports = publicRoute;