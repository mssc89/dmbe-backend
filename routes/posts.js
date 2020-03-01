const Router = require('express-promise-router');

const db = require('../utils/db');

const router = new Router();
module.exports = router;

router.get('/posts', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM posts');
  res.json(rows[0]);
});
