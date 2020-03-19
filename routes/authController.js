User = require('../models/userModel');

//register - add new user, return jwt token
exports.register = async function (req, res) {
  try {
    const user = new User(req.body)
    await user.save()
    const token = await user.generateToken()
    res.json({
      status: 'ok',
      data: token,
    });
  } catch (error) {
    res.json({
      status: 'error',
      data: error.message,
    });
  }
};

//login - return jwt token
exports.login = async function (req, res) {
  try {
    const { username, password } = req.body
    const user = await User.findUser(username, password)
    const token = await user.generateToken()
    res.json({
      status: 'ok',
      data: token,
    });
  } catch (error) {
    res.json({
      status: 'error',
      data: error.message,
    });
  }
};
