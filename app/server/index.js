'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const config = require('../config');

// Instancia de express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);

// Plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(config.port, () => {
  console.log(`Express app started on port ${config.port}`);
});

module.exports = app;