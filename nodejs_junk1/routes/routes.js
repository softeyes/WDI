var router = require('express').Router();
var data = require('../db/data');
module.exports = router;

router.get('/', get_home);

function get_home(request, response) {
    response.render('pages/index.ejs', {data});

}