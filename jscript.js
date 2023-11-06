const addButton = document.querySelector('#addBookBtn');
const bookListElement = document.querySelector('.bookListWrapper');
const inputFields = document.querySelectorAll('input');


const bookLibrary = [];


let bookID = 0;

/*   function Book(title, author, pages, genre, haveRead) {
    this.bookID = bookID;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.haveRead = haveRead;
};

Book.prototype.toggleRead = function() {
    this.haveRead === 'Yes' ? this.haveRead = 'No' : this.haveRead = 'Yes'
};*/

class Book {
    constructor (title, author, pages, genre, haveRead) {
        this.bookID = bookID;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.haveRead = haveRead;
    }

    toggleRead() {
        this.haveRead === 'Yes' ? this.haveRead = 'No' : this.haveRead = 'Yes' 
    }

};

/// ----------------------
/// SECTION DOM MANIPULATE FUNCTIONS
/// -----------------------

function createBookText(object, key, docElement) {
    const bookText = document.createElement('p');
    const bookButton = document.createElement('button');
    if (key === 'bookID' || key === 'toggleRead') {

    }
    else if (key === 'haveRead') {
        bookButton.textContent = object[key];
        bookButton.classList.add("readButton");
        bookButton.classList.add(bookBtnClass(bookButton));
        changeRead(bookButton, object);
        bookText.appendChild(bookButton);
        docElement.appendChild(bookText);

    }
    else {
        bookText.textContent = object[key];
        docElement.appendChild(bookText);      
    };
};

function bookBtnClass(currentButton) {
    return currentButton.textContent === 'Yes' ? 'yesRead' : 'notRead'
};

function createDeleteBtn(object, docElement) {
    const deleteButtonPara = document.createElement('p');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X'
    deleteButton.value = object.bookID;
    deleteButton.classList.add('deleteBtn');
    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(deleteButton.value);
        deleteBook(deleteButton.value);
        drawBooks();
    })
    deleteButtonPara.appendChild(deleteButton);
    docElement.appendChild(deleteButtonPara);
}

function clearInputs() {
    inputFields.forEach((element) => {
        element.value = null;
    });
};

function resetBookList() {
    bookListElement.innerHTML = '<div class="oneBook titleRow"><p>Title</p><p>Author</p><p>Genre</p><p>Pages</p><p>HaveRead</p><p></p></div>';
}

function changeRead(currentButton, object) {
    currentButton.addEventListener('click', (event) => {
        object.toggleRead();
        drawBooks();
    });    
};

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


