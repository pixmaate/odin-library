const addButton = document.querySelector('#addBookBtn');
const bookListElement = document.querySelector('.bookListWrapper');
const inputFields = document.querySelectorAll('input');


const bookLibrary = [];


let bookID = 0;

function Book(title, author, pages, genre, haveRead) {
    this.bookID = bookID;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.haveRead = haveRead;
};

/// ----------------------
/// SECTION DOM MANIPULATE FUNCTIONS
/// -----------------------

function createBookText(object, key, docElement) {
    const bookText = document.createElement('p');
    bookText.textContent = object[key];
    docElement.appendChild(bookText);
}

function createDeleteBtn(object, docElement) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'
    deleteButton.value = object.bookID;
    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(deleteButton.value);
        deleteBook(deleteButton.value);
        drawBooks();
    })
    docElement.appendChild(deleteButton);
}

function clearInputs() {
    inputFields.forEach((element) => {
        element.value = null;
    });
};

function resetBookList() {
    bookListElement.innerHTML = '<div class="oneBook titleRow"><p>Id</p><p>Title</p><p>Author</p><p>Genre</p><p>Pages</p><p>HaveRead</p><p></p></div>';
}

/// -----------------------
/// SECTION DRAW FUNCTIONS
/// -----------------------

function drawBooks() {
    resetBookList();
    for (const el of bookLibrary) {
        const bookElement = document.createElement('div');
        bookListElement.appendChild(bookElement);
        bookElement.classList.add('oneBook');

        for (const element in el) {
            console.log(el[element]);
            createBookText(el, element, bookElement)
        };
        createDeleteBtn(el, bookElement);        
    };
};

/// -----------------------
//// SECTION OBJECT MANIPULATE FUNCTIONS
/// -----------------------

function addBookToLib(bookTitle, bookAuthor, bookPages, bookGenre, bookRead) {
    const book = new Book(bookTitle, bookAuthor, bookPages, bookGenre, bookRead);
    console.log(book);
    bookLibrary.push(book);
    bookID += 1;
    drawBooks();
}

function deleteBook(bookIndex) {
    bookLibrary.splice(bookIndex,1);
    restoreBookID();
}


function restoreBookID() {
    if (bookLibrary.length === 0) {
        bookID = 0;
    }
    else {
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
};





addButton.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLib(
        document.querySelector('#title').value,
        document.querySelector('#author').value,
        document.querySelector('#pages').value,
        document.querySelector('#genre').selectedOptions[0].textContent,
        document.querySelector('#read').selectedOptions[0].textContent,
        );
    clearInputs();
});


