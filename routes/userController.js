User = require('../models/userModel');

//index - list all users
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: 'error',
                data: err,
            });
        }
        else{
            res.json({
                status: 'ok',
                data: users
            });
        }
    });
};

//new - add new user
exports.new = function (req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.name = req.body.name;
    user.save(function (err) {
        if (err){
            res.json({
                status: 'error',
                data: err,
            });
        }
        else{
            res.json({
                status: 'ok',
                data: user._id
            });
        }
    });
};

//view - get single user
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err){
            res.json({
                status: 'error',
                data: err,
            });
        }
        else{
            res.json({
                status: 'ok',
                data: user
            });
        }
    });
};

//update - change single user
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err){
            res.json({
                status: 'error',
                data: err,
            });
        }
        else{
            user.username = req.body.username;
            user.password = req.body.password;
            user.email = req.body.email;
            user.name = req.body.name;
            user.save(function (err) {
                if (err){
                    res.json({
                        status: 'error',
                        data: err,
                    });
                }
                else{
                    res.json({
                        status: 'ok',
                    });
                }
            });
        }
    });
};

//delete - remove single user
exports.delete = function (req, res) {
    User.remove({_id: req.params.user_id}, function (err, user) {
        if (err){
            res.json({
                status: 'error',
                data: err,
            });
        }
        else{
            res.json({
                status: 'ok',
            });
        }
    });
};
