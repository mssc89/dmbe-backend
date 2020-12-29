const router = require('express').Router();
const auth = require('../middleware/auth');

//controllers
const postController = require('./postController');
const userController = require('./userController');
const authController = require('./authController');

//posts
router.get('/posts', postController.index);
router.post('/posts', auth, postController.new);

//single post
router.get('/posts/:post_id', postController.view);
router.put('/posts/:post_id', auth, postController.update);
router.delete('/posts/:post_id', auth, postController.delete);

//users
router.get('/users', userController.index);
router.post('/users', auth, userController.new);

//single user
router.get('/users/:user_id', userController.view);
router.put('/users/:user_id', auth, userController.update);
router.delete('/users/:user_id', auth, userController.delete);

//auth
router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);
router.post('/auth/logout', auth, authController.logout);
router.post('/auth/logoutAll', auth, authController.logoutAll);

module.exports = router;
