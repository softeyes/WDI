console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

var user = os.userInfo();

console.log('Result:', notes.add(9, -2));


// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err){
//     if (err){
//         console.log('Unable to write to file');
//     }
// });