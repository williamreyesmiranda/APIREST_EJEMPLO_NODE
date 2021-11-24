const { Router } = require('express');
const router = Router();

const movies = require('../samples.json');
// console.log(movies);

router.get('/movies', (req, res) => {
   
    res.json(movies);
}
);

module.exports = router;
