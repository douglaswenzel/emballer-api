const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send({ message: 'Acesso às rotas API OK.' });
});

module.exports = router;