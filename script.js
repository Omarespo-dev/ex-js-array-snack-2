const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];



// Snack 1 - Filtra e Modifica

//   Crea un array (longBooks) con i libri che hanno più di 300 pagine;
const longBooks = books.filter(book => {
    return book.pages > 300
})

console.log(longBooks)

//  Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.

const longBooksTitles = longBooks.map(book => {
    return book.title
})

console.log(longBooksTitles)

//  Stampa in console ogni titolo nella console.














// Snack 2 - Il primo libro scontato

//     Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter(book => {
    return book.available === true
})
console.log(availableBooks)

//     Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
const discountedBooks = availableBooks.map(book => 
    ({...book,price: (parseFloat(book.price) * 0.8).toFixed(2)})
);

console.log(discountedBooks);


//     Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

const fullPricedBook = discountedBooks.find(book => {
    return parseInt(book.price) % 1 === 0
})

console.log(fullPricedBook)






 
// Snack 3 - Ordinare gli Autori

// Creare un array (authors) che contiene gli autori dei libri.

const authors = books.map(autor => {
    return autor.author
})

// console.log(authors)


// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
const areAuthorsAdults = authors.every(autor => autor.age >= 18)
// console.log(areAuthorsAdults)



// Ordina l’array authors in base all’età, senza creare un nuovo array.
authors.sort((a,b) => {
    return a.age - b.age
})
// console.log(authors)



// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
if(areAuthorsAdults === true) {
    authors.sort((a,b) => {
        return b.age - a.age
    })
    console.log(authors)
}else{
    authors.sort((a,b) => {
        return a.age - b.age
    })
    console.log(authors)
}





// Snack 4 - Calcola l’età media

//     Creare un array (ages) che contiene le età degli autori dei libri.
const ages = books.map(book => {
    return  book.author.age
})
console.log(ages)

//     Calcola la somma delle età (agesSum) usando reduce.
const agesSum  = ages.reduce((acc, num) => {
    return acc + num
},0)

console.log(agesSum)

//     Stampa in console l’età media degli autori dei libri.
const etaMedia = agesSum / 4
console.log(etaMedia)