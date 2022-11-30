const modal = document.querySelector(".modal");
const addBook = document.querySelector(".add-book");
const submit = document.querySelector(".submit");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const form = document.querySelector(".add-book-form");
const error = document.querySelector(".error");
const cardsContainer = document.querySelector(".cards-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    error.innerText = "";
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    if(!bookExists(newBook)) {
        addBookToLibrary(newBook);
        cardsContainer.innerText = "";
        generateLibraryCards();
        modal.close();
    }else {
        error.innerText = "Book already exists";
    }
})

addBook.addEventListener("click", () => {
    title.value = ""; //Set input values to empty when clicking on add book btn
    author.value = "";
    pages.value = "";
    read.checked = false;
    modal.showModal();
})

document.addEventListener("click", (e) => {
    if(e.target.className === "modal") {
        modal.setAttribute("closing", "");
        modal.addEventListener("animationend", () => {
            modal.removeAttribute("closing");
            error.innerText = ""; //prevent error message from appearing
            modal.close();
        }, {once: true});
    }
})

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
    console.log(myLibrary);
}

function generateLibraryCards() {
    myLibrary.forEach((book, index) => {
        createCards(book, index);
    });
}

function createCards(bookObj, index) {
    let bookIndex = index;
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    card.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    readBtn.classList.add("read");
    removeBtn.classList.add("remove");
    title.innerText = bookObj.title;
    author.innerText = bookObj.author;
    pages.innerText = `${bookObj.pages} pages`;
    readBtn.innerText = readCheck(bookObj);
    removeBtn.innerText = "Remove";
    card.append(title, author, pages, readBtn, removeBtn);
    cardsContainer.append(card);

    readBtn.addEventListener("click", (e) => {
        let readValue = e.target.innerText;
        if(readValue === "Read") {
            readBtn.innerText = "Not Read";
            myLibrary[bookIndex].read = false;
            // console.log(myLibrary[bookIndex]);
        }else {
            readBtn.innerText = "Read";
            myLibrary[bookIndex].read = true;
            // console.log(myLibrary[bookIndex]);
        }
    });
}

function readCheck(bookObj) {
    if(bookObj.read) return "Read";
    else return "Not Read";
}

function checkUserInputs(bookObj) {
    if(bookObj.title === "") return false;
    else if(bookObj.author === "") return false;
    else if(bookObj.pages === "") return false;
    else return true;
}

function bookExists(bookObj) {
    const checkTitle = myLibrary.find(book => book.title.toUpperCase() === bookObj.title.toUpperCase());
    const checkAuthor = myLibrary.find(book => book.author.toUpperCase() === bookObj.author.toUpperCase());
    if(checkTitle && checkAuthor) return true;
    else return false;
}