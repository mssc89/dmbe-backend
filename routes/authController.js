User = require('../models/userModel');

//register - add new user, return jwt token
exports.register = async function(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateToken();
    res.json({
      status: 'ok',
      data: token,
    });
  } catch(error) {
    res.json({
      status: 'error',
      data: error.message,
    });
  }
};

//login - return jwt token
exports.login = async function(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findUser(username, password);
    const token = await user.generateToken();
    res.json({
      status: 'ok',
      data: token,
    });
  } catch(error) {
    res.json({
      status: 'error',
      data: error.message,
    });
  }
};

//logout - remove token from db
exports.logout = async function(req, res) {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    })
    await req.user.save();
    res.json({
      status: 'ok'
    });
  } catch(error) {
    res.json({
      status: 'error',
      data: error.message,
    });
  }
}

//logoutAll - remove all user tokens from db
exports.logoutAll = async function(req, res) {
  try {
    req.user.tokens.list.splice(0, req.user.tokens.list.length);
    await req.user.save();
    res.json({
      status: 'ok'
    });
  } catch(error) {
    res.json({
      status: 'error',
      data: error.message,
    });
  }
}
