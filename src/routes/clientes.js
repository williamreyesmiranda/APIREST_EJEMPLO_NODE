const { Router } = require('express');
const router = Router();

const clientes = require('../clientes.json');
// console.log(movies);

router.get('/clientes', (req, res) => {
   
    res.json(clientes);
}
);

module.exports = router;
