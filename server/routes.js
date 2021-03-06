const router = require('express').Router();
const { getDogs, getDog, postDog, getBreeds } = require('./controller.js');

router.get('/dogs', getDogs);

router.get('/dogs/:name', getDog);

router.post('/dogs', postDog);

router.get('/breeds', getBreeds);

module.exports = router;
