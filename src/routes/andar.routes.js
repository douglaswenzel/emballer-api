const express = require('express');
const router = express.Router();
const AndarController = require('../controller/andar.controller');

router.get('/', AndarController.listarAndares);

module.exports = router;