const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    let isAuthorized;
    let details;
    const token = req.cookies.token;
    if (!token) {
        isAuthorized = false
    }
    else {
        jwt.verify(token, process.env.GET_JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err)
                res.clearCookie('token');
                isAuthorized = false
            } else {
                isAuthorized = true
                details = decoded
            }
        })
    }
    return { isAuthorized, details }
}

module.exports = authenticate;