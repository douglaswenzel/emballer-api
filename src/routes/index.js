const express = require('express');
const router = express.Router();

const andarRoutes = require('./andar.routes');
const salaRoutes = require('./sala.routes');

router.use('/andares', andarRoutes);
router.use('/salas', salaRoutes); 

router.get('/', (req, res) => {
    res.status(200).send({ message: 'Acesso às rotas API OK.' });
});

module.exports = router;