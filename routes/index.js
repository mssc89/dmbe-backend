const router = require('express').Router();
const auth = require('../middleware/auth');

//controllers
const postController = require('./postController');
const authController = require('./authController');

//posts
router.get('/posts', postController.index);
router.post('/posts', auth, postController.new);

//single post
router.get('/posts/:post_id', postController.view);
router.put('/posts/:post_id', auth, postController.update);
router.delete('/posts/:post_id', auth, postController.delete);

//auth
router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);

module.exports = router;
