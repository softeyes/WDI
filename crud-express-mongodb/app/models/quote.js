// app/models/quote.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define a schema
var Schema = mongoose.Schema;
var quoteSchema = new Schema({
    author: String,
    quote: String
});