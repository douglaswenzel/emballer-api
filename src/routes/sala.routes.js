// src/routes/sala.routes.js

const express = require('express');
const router = express.Router();
const SalaController = require('../controller/sala.controller');

router.get('/', SalaController.listarSalas);

module.exports = router;