const { books, bookNames } = require("./books");

//1. Hur många böcker?
let antalBooks = books.length;
console.log('Det finns ' + antalBooks + ' böcker i affären');



//2. Tar ut title från listan
console.log('');
console.log('Namn på böckerna:');
console.log(bookNames) 


//3. Genrekoden
console.log('Fantasy böckerna är:');
books.forEach(bok => {
	if (bok.genre === "Fantasy" ) {
		console.log(bok.title);
		console.log(bok.price);
	}
})

//4.
console.log('');
console.log('Dystopiböckerna är:');
books.forEach(bok => {
	if (bok.genre === "Dystopian" ) {
		console.log(bok.title);
	}
})
console.log('')
console.log('Classicböckerna är:');
books.forEach(bok => {
	if (bok.genre === "Classic" ) {
		console.log(bok.title);
	}
})

console.log('')
console.log('Mysterieböckerna är:');
books.forEach(bok => {
	if (bok.genre === "Mystery" ) {
		console.log(bok.title);
	}
})

//5. Namn och pris på alla böcker över $10
console.log('')
console.log('Alla böcker över $10: ');
books.forEach(bok => {
	if (bok.price >= "10" ) {
		console.log(bok.title);
		console.log(bok.price);
	}
})

//6. Totalpris
console.log('');
console.log('Totala priset för alla böckerna: ');
let totaltPris = 0;
books.forEach(book => {
    if (book.price >= 0 ) {
        totaltPris += book.price;
    }
});

totaltPris = Math.round(totaltPris);
console.log (totaltPris);


//Uppgift 7 Vilka böcker är värd mest,dysto. elr myster.


//Uppgift 8 Skriv ut namnen på böcker i bokstavsordning
//Inte helt klar (: 
function BokstavBokDesc (a,b) {
	if (a.title < b.title) {
	return -1
	} else if (a.title > b.title){
		return 1
	}else {
		return 0
	}
}
const bb = [...books];
bb.sort(BokstavBokDesc);
const titles = bb.map(book => book.title);
console.log (titles);


//10


//11


//12. Titlar som inte börjar på "THE"

books.forEach(book => {
	if (!book.title.toLowerCase().startsWith("the")) {
	  console.log(book.title);
	}
  });



//13. Titlar i stigande ordning
console.log('')
books.sort((a, b) => a.title.length - b.title.length);

console.log('Titlar i stigande ordning:');
books.forEach(book => {
  console.log(book.title);
});


//14. Lägga till böcker i listan



console.log('');
function addBook(id, title, author, genre, price) {
	const newBook = {
	  id: id,
	  title: title,
	  author: author,
	  genre: genre,
	  price: price
	};
  
	books.push(newBook);
	books.sort((a, b) => a.id - b.id);
  
	console.log(`Boken "${title}" har lagts till i listan.`);
  }
  
  addBook(26, "Star Wars: Rey is not a Skywalker", "George Lucas", "Fiction", 7);
  
  
  console.log("Uppdaterad lista av böcker:");
  console.log(books);

  
  
  