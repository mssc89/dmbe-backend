const express = require('express');
const mountRoutes = require('./routes');
const app = express();
mountRoutes(app);

app.listen(3000);
