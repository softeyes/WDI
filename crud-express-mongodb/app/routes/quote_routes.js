// QUOTES ==============================

function quote_routes(app, passport) {
    
        app.post('/quotes', function (req, res) {
            db.collection('quotes').save(req.body, function (err, result) {
                if (err) return console.log(err)
    
                console.log('saved to database')
                res.redirect('/')
            })
        })
        
        app.get('/', function (req, res) {
            // Cursor is a Mongo Object that contains all quotes from our database. It also contains a bunch of other properties and methods that allow us to work with data easily. One such method is the toArray method. 
            var cursor = db.collection('quotes').find().toArray(function (err, result) {
                if (err) return console.log(err)
                // renders profile.ejs
                res.render('profile.ejs', {
                    quotes: result
                })
                // send HTML file populated with quotes here
            })
        });
    
    };
    
    module.exports = quote_routes;