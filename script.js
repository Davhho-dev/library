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
        createCards();
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

function createCards() {
    for(const book in myLibrary) {
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("h2");
    title.classList.add('title');
    const author = document.createElement("p");
    author.classList.add('author');
    const pages = document.createElement("p");
    pages.classList.add("pages");
    const read = document.createElement("button");
    read.classList.add("read");
    const removeBtn = document.createElement("button");
    removeBtn.classList.add('remove');
    removeBtn.innerText = "Remove";
    title.innerText = myLibrary[book].title;
    author.innerText = myLibrary[book].author;
    pages.innerText = myLibrary[book].pages;
    read.innerText = readCheck(myLibrary[book]);
    card.append(title, author, pages, read, removeBtn);
    cardsContainer.append(card);
    console.log(`book amount: ${myLibrary.length}`);
    }
}


// function createBookCard(bookObj) {
//     const cardsContainer = document.querySelector(".cards-container");
//     const card = document.createElement("div");
//     card.classList.add("card");
//     const title = document.createElement("h2");
//     title.classList.add("title");
//     const author = document.createElement("p");
//     author.classList.add("author");
//     const pages = document.createElement("p");
//     pages.classList.add("pages");
//     const read = document.createElement("button");
//     read.classList.add("read");
//     title.innerText = bookObj.title;
//     author.innerText = bookObj.author;
//     pages.innerText = bookObj.pages;
//     read.innerText = readCheck(bookObj);
//     const removeBtn = document.createElement("button");
//     removeBtn.classList.add("remove");
//     removeBtn.innerText = "Remove";
//     card.append(title, author, pages, read, removeBtn);
//     cardsContainer.append(card);
// }

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
    const checkTitle = myLibrary.find(book => book.title === bookObj.title);
    const checkAuthor = myLibrary.find(book => book.author === bookObj.author);
    if(checkTitle && checkAuthor) return true;
    else return false;
}