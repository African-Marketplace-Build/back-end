// require('dotenv').config();
const jwt = require('jsonwebtoken')

function restrict(role = 'admin') {
  return async (req, res, next) => {
    const authError = {
      message: 'Please login first !',
    }

    try {
      // this utilizes the `cookie-parser` middleware
      // to pull the JWT out of the cookies that
      //  were automatically sent by the client.
      const token = req.headers.authorization
      if (!token) {
        return res.status(401).json(authError)
      }
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedPayload) => {
        if (err || decodedPayload.userRole !== role) {
          return res.status(401).json(authError)
        }
        // we attach the decoded payload values to the request, just in case we
        // need to access them in later middleware functions or route handlers.
        // (to look up the user by ID, for example.)
        req.token = decodedPayload

        next()
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = restrict
