const rateLimiter = require('express-rate-limit');

exports.logInLimiter = rateLimiter({
    windowMs: 60 * 1000,
    max: 10,
    handler: (req, res, next) =>{
        let err = new Error("Too many login requests. Try again later.");
        err.status = 429;
        return next(err);
    }
});