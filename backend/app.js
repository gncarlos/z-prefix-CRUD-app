const express = require('express')
var path = require('path');
const cors = require('cors');
// const logger = require('morgan')
var indexRouter = require('./routes/index');

const app = express()
const port = 3001

app.use(cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;