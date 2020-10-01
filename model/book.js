  /* Construction de la classe Book */
  class Book {
      #author;
      #title;
      #category;
      constructor(author,title,category){
          this.#author = author;
          this.#title = title;
          this.#category = category;
      }
      get author(){
        return this.#author;
      }
      get title(){
        return this.#title;
      }
      get category(){
        return this.#category;
      }
  }

/* La classe Book est visible de l'extrérieure */
 module.exports = Book;






