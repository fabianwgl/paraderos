'use strict';
const express = require('express');
const config = require('../config');
const index = require('./api/index')

module.exports = function(app) {

  app.use('/', index);
  

};
