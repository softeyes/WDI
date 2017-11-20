console.log('Running!');

const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

var url = ('mongodb://localhost:27500/mongo-crud');
MongoClient.connect(url, 
    function (err, database) {
        if (err) return console.log(err)
        db = database;

        app.listen(3000, () => {
            console.log('listening on 3000')
          });
        // ... do something here
  });

app.get('/', (request, response) => {
    db.collection('quotes').find().toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      response.render('index.ejs', {quotes: result})
    })
  })

// app.get('/', (request, response) => {
//     var cursor = db.collection('quotes').find()
//   })

app.put('/quotes', (req, res) => {
    console.log('running put');
    db.collection('quotes')
    .findOneAndUpdate({name: 'Yoda'}, {
      $set: {
        name: req.body.name,
        quote: req.body.quote
      }
    }, {
      sort: {_id: -1},
      upsert: true
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
      
    })
  });

app.post('/quotes', (request, response) => {
    console.log(request.body)
    db.collection('quotes').save(request.body, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        response.redirect('/')
    
        db.collection('quotes').find().toArray(function(err, results) {
            console.log(results)
            // send HTML file populated with quotes here
          })
  })
});

app.delete('/quotes', (req, res) => {
    db.collection('quotes').findOneAndDelete({name: req.body.name},
    (err, result) => {
      if (err) return res.send(500, err)
      res.send({message: 'A darth vadar quote got deleted'})
    })
  })