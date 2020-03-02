let router = require('express').Router();

//controllers
let postController = require('./postController');

router.route('/posts')
    .get(postController.index)
    .post(postController.new);

router.route('/posts/:post_id')
    .get(postController.view)
    .put(postController.update)
    .delete(postController.delete);

module.exports = router;
