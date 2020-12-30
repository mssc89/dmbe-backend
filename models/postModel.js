var mongoose = require('mongoose'),
userModel = require('./userModel.js'),
User = mongoose.model('user').schema;

var postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    author: {
        type: User,
        required: true
    }
});

var Post = module.exports = mongoose.model('post', postSchema);

module.exports.get = function (callback, limit) {
    Post.find(callback).limit(limit);
}
