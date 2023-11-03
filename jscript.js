const bookLibrary = [];

function newBook() {

}

function addBookToLib() {

}

function Book(title, author, pages, genre, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.haveRead = haveRead;
};

for (i=0;i<=5;i++) {
    const book = new Book(i + 'Book Title',i + 'Book Author',i,i + 'Book Genre',0);
    bookLibrary[i] = book;
    if (i===2) {
        bookLibrary[i].haveRead = '1';
    };
};