var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) {
    let birdData = [
        {
            species: 'Cardinal',
            habitat: 'Woodland',
            food: 'Seeds, fruit, insects',
        },
        {
            species: 'Robin',
            habitat: 'Woodland',
            food: 'Worms, insects',
        }
    ]
    res.send(birdData);
});

module.exports = router;
