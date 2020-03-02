Post = require('../models/postModel');

//index - list all posts
exports.index = function (req, res) {
    Post.get(function (err, posts) {
        if (err) {
            res.json({
                status: 'error',
                data: err,
            });
        }
        else{
            res.json({
                status: 'ok',
                data: posts
            });
        }
    });
};

//new - add new post
exports.new = function (req, res) {
    var post = new Post();
    post.title = req.body.title ? req.body.title : post.title;
    post.content = req.body.content;
    post.save(function (err) {
        if (err){
            res.json({
                status: 'error',
                data: err,
            });
        }
        else{
            res.json({
                status: 'ok',
                data: post._id
            });
        }
    });
};

//view - get single post
exports.view = function (req, res) {
    Post.findById(req.params.post_id, function (err, post) {
        if (err){
            res.json({
                status: 'error',
                data: err,
            });
        }
        else{
            res.json({
                status: 'ok',
                data: post
            });
        }
    });
};

//update - change single post
exports.update = function (req, res) {
    Post.findById(req.params.post_id, function (err, post) {
        if (err){
            res.json({
                status: 'error',
                data: err,
            });
        }
        post.title = req.body.title ? req.body.title : post.title;
        post.content = req.body.content;
        post.save(function (err) {
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
    });
};

//delete - remove single post
exports.delete = function (req, res) {
    Post.remove({_id: req.params.post_id}, function (err, post) {
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
