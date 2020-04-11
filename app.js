const express = require('express');
const path = require('path');

const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/@popperjs/core/dist/umd')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port, () => {
  debug(`Listening at Port ${chalk.green(port)}`);
});
