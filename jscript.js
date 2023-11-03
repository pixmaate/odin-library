const addButton = document.querySelector('#addBookBtn');
const bookListElement = document.querySelector('.bookListWrapper');


const bookLibrary = [];


let bookID = 0;

function Book(title, author, pages, genre, haveRead) {
    this.bookID = bookID;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.haveRead = haveRead;
};


function drawBooks() {
    bookListElement.innerHTML = '';
    for (const el of bookLibrary) {
        const bookElement = document.createElement('div');
        bookListElement.appendChild(bookElement);
        for (const element in el) {
            console.log(el[element]);
            const bookText = document.createElement('p');
            bookText.textContent = el[element];
            bookElement.appendChild(bookText);
        };
    };
};

function addBookToLib() {
    const book = new Book(bookID + 'book title', bookID + 'book author', bookID, bookID + 'genre', 0);
    console.log(book);
    bookLibrary.push(book);
    bookID += 1;
}

function deleteBook(bookIndex) {
    bookLibrary.splice(bookIndex,1);
    restoreBookID();
}


function restoreBookID() {
    for (const el of bookLibrary) {
       if (bookLibrary.indexOf(el) === bookLibrary[bookLibrary.indexOf(el)].bookID) {
       }
       else {
        bookID = bookLibrary.indexOf(el);
        bookLibrary[bookID].bookID = bookID;
        bookID += 1;
       }
    };
};





addButton.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLib();
});


