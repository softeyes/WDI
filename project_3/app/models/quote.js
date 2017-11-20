// app/models/quote.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// define the schema for our quote model
var QuoteSchema = new Schema({

        author: String,
        quote: String

});

// create the model for quotes and expose it to our app
module.exports = mongoose.model('Quote', QuoteSchema);