var colors = require('colors/safe');

var log = {
    info: function (info) {
        console.log(colors.green('Info: ' + info));
    },
    warning: function (warning) {
        console.log(colors.red('Warning: ' + warning));
    },
    error: function (error) {
        console.log(colors.blue('Error: ' + error));
    }
};

module.exports = log;

// logger.info('Node.js started'); // logs out message in green

// logger.warning('careful!!!'); // logs out message in blue

// logger.error('blow up!'); // logs out message in red