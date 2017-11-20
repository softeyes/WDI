var router = require('express').Router();

router.get('/', do_home_page);
router.post('/do_user', handle_form);

module.exports = router;

function do_home_page(request, response) {
    console.log('doing homepage');
    response.render('index');

};

function handle_form(request, response) {
    console.log('handling form');
    console.log(request.body);
    response.render('thanks', request.body);
}