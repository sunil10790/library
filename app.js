var express = require('express');
var path = require('path');

var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css' , express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/@popperjs/core/dist/umd')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname , '/views/index.html'));
});

app.listen(3000, function() {
    debug(`Listening to Port ${chalk.green('3000')}`);
});