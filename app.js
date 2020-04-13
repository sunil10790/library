const express = require('express');
const path = require('path');

const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/@popperjs/core/dist/umd')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  debug(`Listening at Port ${chalk.green(port)}`);
});
