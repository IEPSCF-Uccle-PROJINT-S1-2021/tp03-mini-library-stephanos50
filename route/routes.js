"use strict";

const express = require('express');
const road = express.Router();
const books = require('../books');


/* Point d'entrée */
/* Redirige vers '/books/search' */
road.get('/', (req,res) => {
    res.redirect('/books/search');
});


road.get('/books/search', (req,res) => {
  let listes = books.bookList();
  res.render("search", {
    listes: listes
  });
});

road.post('/books/list', (req,res) => {
  const name = req.body.name;
  let listes = books.categorie(name);
  res.render("list", {
    title: name,
    listes: listes
  });
});




module.exports = road;
