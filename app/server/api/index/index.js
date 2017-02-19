'use strict';

const express = require('express');
const controller = require('./controller');

const router = new express.Router();

router.get('/', controller.index);
router.post('/', controller.paradero)

module.exports = router;