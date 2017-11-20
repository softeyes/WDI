// create a schema
var userSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date

    // custom method to add string to end of name
    // you can create more important methods like name validations or formatting
    // you can also do queries and find similar users 
    userSchema.methods.dudify = function () {
        // add some stuff to the users name
        this.name = this.name + '-dude';

        return this.name;
    };
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// create a new user called chris
var chris = new User({
    name: 'Chris',
    username: 'sevilayha',
    password: 'password' 
  });
  
  // call the custom method. this will just add -dude to his name
  // user will now be Chris-dude
  chris.dudify(function(err, name) {
    if (err) throw err;
  
    console.log('Your new name is ' + name);
  });
  
  // call the built-in save method to save to the database
  chris.save(function(err) {
    if (err) throw err;
  
    console.log('User saved successfully!');
  });

  // on every save, add the date
userSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
  
    // change the updated_at field to current date
    this.updated_at = currentDate;
  
    // if created_at doesn't exist, add to that field
    if (!this.created_at)
      this.created_at = currentDate;
  
    next();
  });

  // grab the user model
var User = require('./app/models/user');

// create a new user
var newUser = User({
  name: 'Peter Quill',
  username: 'starlord55',
  password: 'password',
  admin: true
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});

// make this available to our users in our Node applications
module.exports = User;