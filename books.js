
"use strict";
const Book = require('./model/book');

const lists = [
  new Book ('Guillaume Debré',' L\'affaire Lafayette','roman historique'),
  new Book ('Michael Ende','L\'Histoire sans fin','fantasy'),
  new Book ('Giacomo Casanova','Histoire de ma vie','autobiographie'),
  new Book ('Gérald Messadié','La conspiration Jeanne d\'Arc','roman historique'),
  new Book ('Marie Cardinal','Les mots pour le dire','autobiographie'),
  new Book ('J.R.R. Tolkien','Le Seigneur des anneaux','fantasy'),
  new Book ('Hervé Bazin','Vipère au poing','autobiographie'),
  new Book ('Andrzej Sapkowski','Le Sorceleur','fantasy'),
  new Book ('George R. R. Martin','Le Trône de fer','fantasy')
]

/* Retourne la liste des livres  */
exports.bookList = function(){
  return lists;
}

/* Retounre la liste des livres  selon une catègorie   */
exports.categorie = function(category){
  let newLists = [];
  for(let i = 0; i < lists.length; i++ ){
      if(lists[i].category === category){
          newLists.push(lists[i]);
      }
  }
  return newLists;
}















