const Router = require('express-promise-router');

const db = require('../utils/db');

const router = new Router();
module.exports = router;

router.get('/all', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM dmbe.posts');
  res.json(rows[0]);
});
