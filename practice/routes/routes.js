var router = require('express').Router();

module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('inside do_homepage');
    res.render('index');
}