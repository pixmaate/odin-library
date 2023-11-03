const addButton = document.querySelector('#addBookBtn');


const bookLibrary = [];


let bookID = 0;


function newBook() {

}

function addBookToLib() {

}


function restoreBookID() {
    for (let el of bookLibrary) {
       if (bookLibrary.indexOf(el) === bookLibrary[bookLibrary.indexOf(el)].bookID) {
       }
       else {
        bookID = bookLibrary.indexOf(el);
        bookLibrary[bookID].bookID = bookID;
        bookID += 1;
       }
    };
};


function Book(title, author, pages, genre, haveRead) {
    this.bookID = bookID;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.haveRead = haveRead;
};


addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const book = new Book(bookID + 'book title', bookID + 'book author', bookID, bookID + 'genre', 0);
    console.log(book);
    bookLibrary.push(book);
    bookID += 1;
});


