// app/routes.js
module.exports = function (app, passport) {

    // ============================================================================
    // HOME PAGE (with login links) ===============================================
    // ============================================================================
    // show the home page
    app.get('/', function (req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // ============================================================================
    // LOGIN ======================================================================
    // ============================================================================
    // show the login form
    app.get('/login', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', {
            message: req.flash('loginMessage')
        });
    });


    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // ============================================================================
    // SIGNUP =====================================================================
    // ============================================================================
    // show the signup form
    app.get('/signup', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // ==============================================================================
    // GOODREADS ROUTES =============================================================
    // ==============================================================================

    // ==============================================================================
    // AUTHENTICATE (FIRST LOGIN) ===================================================
    // ==============================================================================

    // route for goodreads authentication and login
    app.get('/auth/goodreads', passport.authenticate('goodreads'));

    // handle the callback after goodreads has authenticated the user
    app.get('/auth/goodreads/callback',
        passport.authenticate('goodreads', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    // =============================================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
    // =============================================================================

    // send to goodreads to do the authentication
    app.get('/connect/goodreads', passport.authorize('goodreads', {
        scope: 'email'
    }));

    // handle the callback after goodreads has authorized the user
    app.get('/connect/goodreads/callback',
        passport.authorize('goodreads', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    // =============================================================================
    // UNLINK ACCOUNTS =============================================================
    // =============================================================================
    // used to unlink accounts. for social accounts, just remove the token
    // for local account, remove email and password
    // user account will stay active in case they want to reconnect in the future

    app.get('/unlink/goodreads', function (req, res) {
        var user = req.user;
        user.goodreads.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

    // =====================================
    // QUOTES SECTION ======================
    // =====================================
    var Quote = require('./models/quote');
    var mongoose = require('mongoose');
    mongoose.Promise = require('bluebird');
    var configDB = require('../config/database.js');
    mongoose.connect(configDB.url, {
        useMongoClient: true
    }); // connect to our database
    
    // Query the collection
    app.get('/quotes', function(req, res) {
                var result = Quote.find({'author': 'Jared Ko'})
                    .exec(function (err, results) {
                        if (err) {
                            res.send('error has occured');
                        } else {
                            console.log(results);
                            // res.json(results)
                            res.render('quotes', {
                                Quote: result // get quote out of session and pass to template
        
                            });
                        }
                    });
            });        
    
    // Gets all entries in a collection         
    // app.get('/quotes', function(req, res) {
    //     var result = Quote.find({'author': 'Jared Ko'})
    //         .exec(function (err, results) {
    //             if (err) {
    //                 res.send('error has occured');
    //             } else {
    //                 console.log(results);
    //                 // res.json(results)
    //                 res.render('quotes', {
    //                     Quote: result // get quote out of session and pass to template

    //                 });
    //             }
    //         });


    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }
};