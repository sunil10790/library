var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));

app.get('/', function(req, res) {
    res.send("Hello from Node");
});

app.listen(3000, function() {
    debug(`Listening to Port ${chalk.green('3000')}`);
});