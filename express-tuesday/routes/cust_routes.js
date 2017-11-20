var router = require('express').Router();
var person = {name: 'bill', age: 45, job: 'coder'};

router.get('/customer', do_customer_stuff);

module.exports = router;

function do_customer_stuff(req, res){
    res.render('customer', person);
}