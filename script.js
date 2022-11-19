const modal = document.querySelector(".modal");
const addBook = document.querySelector(".add-book");
const submit = document.querySelector(".submit");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const ifRead = document.getElementById("read");


submit.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(`title: ${title.value}, author: ${author.value}, pages: ${pages.value}, read: ${ifRead.value}`);
    const newBook = new Book(title.value, author.value, pages.value, ifRead.value);
    addBookToLibrary(newBook);
})


addBook.addEventListener("click", () => {
    modal.showModal();
})

document.addEventListener("click", (e) => {
    if(e.target.className === "modal") {
        modal.setAttribute("closing", "");
        modal.addEventListener("animationend", () => {
            modal.removeAttribute("closing");
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
    createBookCard(bookObj);
}

function createBookCard(bookObj) {
    const cardsContainer = document.querySelector(".cards-container");
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("h2");
    title.classList.add("title");
    const author = document.createElement("p");
    author.classList.add("author");
    const pages = document.createElement("p");
    pages.classList.add("pages");
    title.innerText = `${bookObj.title}`;
    author.innerText = `${bookObj.author}`;
    pages.innerText = `${bookObj.pages}`;
    card.append(title, author, pages);
    cardsContainer.append(card);
}