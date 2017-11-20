// GOODREADS LOGIN ================================================================

function goodreads_passport(passport) {
    
        var goodreadsStrategy = require('passport-goodreads').Strategy;
        var User = require('../app/models/user');
        var configAuth = require('./auth');
    
        passport.use(new goodreadsStrategy({
    
            consumerKey: configAuth.goodreadsAuth.consumerKey,
            consumerSecret: configAuth.goodreadsAuth.consumerSecret,
            callbackURL: configAuth.goodreadsAuth.callbackURL,
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    
    
            },
            function (req, token, tokenSecret, profile, done) {
                console.log(profile);
    
                // asynchronous
                process.nextTick(function () {
    
                    // check if the user is already logged in
                    if (!req.user) {
    
                        User.findOne({
                            'goodreads.id': profile.id
                        }, function (err, user) {
                            if (err)
                                return done(err);
    
                            if (user) {
                                // if there is a user id already but no token (user was linked at one point and then removed)
                                if (!user.goodreads.token) {
                                    user.goodreads.token = token;
                                    user.goodreads.username = profile.username;
                                    user.goodreads.displayName = profile.displayName;
    
                                    user.save(function (err) {
                                        if (err)
                                            throw err;
                                        return done(null, user);
                                    });
                                }
    
                                return done(null, user); // user found, return that user
                            } else {
                                // if there is no user, create them
                                var newUser = new User();
    
                                newUser.goodreads.id = profile.id;
                                newUser.goodreads.token = token;
                                newUser.goodreads.username = profile.username;
                                newUser.goodreads.displayName = profile.displayName;
    
                                newUser.save(function (err) {
                                    if (err)
                                        throw err;
                                    return done(null, newUser);
                                });
                            }
                        });
    
                    } else {
                        // user already exists and is logged in, we have to link accounts
                        var user = req.user; // pull the user out of the session
    
                        user.goodreads.id = profile.id;
                        user.goodreads.token = token;
                        user.goodreads.username = profile.username;
                        user.goodreads.displayName = profile.displayName;
    
                        user.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, user);
                        });
                    }
    
                });
    
            }));
    
    };
    
    module.exports = goodreads_passport;