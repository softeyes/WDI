var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.render('index', { header: 'index!'});
});

router.get('/contact', function(req, res) {
  res.render('index', { header: 'contact!'});
});

router.get('/about', function(req, res) {
  res.render('index', { header: 'about!'});
});

router.get('/posts', function(req, res) {
    console.log("index");
    res.send("INDEX");
  });

  router.get('/posts/new', function(req, res) {
    console.log("new");
    res.render("posts/new");
  });
  
  router.get('/posts/:id', function(req, res) {
    console.log("show");
    res.send("SHOW");
  });
  
  router.post('/posts', function(req, res) {
    console.log("create");
    console.log(req.body);
    res.render("posts/new");
  });
  
  router.get('/posts/:id/edit', function(req, res) {
    console.log("edit");
    res.send("EDIT");
  });
  
  router.put('/posts/:id', function(req, res) {
    console.log("update");
    res.send("UPDATE");
  });
  
  router.delete('/posts/:id', function(req, res) {
    console.log("delete");
    res.send("DELETE");
  });

  module.exports = router;