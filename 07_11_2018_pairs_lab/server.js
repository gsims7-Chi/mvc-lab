const express = require('express');
const bodyParser = require('body-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extend: true}));
app.use(methodOverride('_method'));


const persons = require('./controllers/controllers')

// this means that every route in the fruit controller starts with / fruits
app.use('/persons', persons)


app.listen(7777, () => {
  console.log("I'm over 7777");
})