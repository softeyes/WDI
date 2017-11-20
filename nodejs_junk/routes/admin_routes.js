var router = require('express').Router();
var people = require('../database/people');
module.exports = router;

router.get('/admin', get_admin_stuff);

function get_admin_stuff(request, response){
    response.render('admin', {people});   
}