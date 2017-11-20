function goodreads_routes(app, passport) {
    // =====================================
    // GOODREADS ROUTES ======================
    // =====================================

    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================

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
};

module.exports = goodreads_routes;