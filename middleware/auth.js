const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const data = jwt.verify(token, process.env.jwtKey);
        const user = await User.findOne({ _id: data._id, 'tokens.token': token });
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
      res.json({
        status: 'error',
        data: 'Auth error',
      });
    }
}

module.exports = auth;
