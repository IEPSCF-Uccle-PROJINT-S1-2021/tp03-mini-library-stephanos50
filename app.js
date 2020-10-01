const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pug = require('pug');
const root = require('./route/routes');
const logger = require('morgan');
const path = require('path');



app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(root);

app.listen( 4242, ()=>{
  console.log(`My first connection http://127.0.0.1:4242`);
  });




